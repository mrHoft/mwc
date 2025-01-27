import process from 'node:process';

const { API_URL, API_TOKEN } = process.env;

type TRequestProps = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  header?: { [key: string]: string };
  body?: string | FormData;
};

type TRequestResponse<T> = T | { error?: string; status?: number };

class Fetcher {
  private request<T>({ method, url, header, body }: TRequestProps): Promise<TRequestResponse<T>> {
    const info: { status: number; error: string } = {
      status: 500,
      error: 'Unknown',
    };
    const headers: { [key: string]: string } = header || { 'Content-Type': 'application/json' };
    headers.Authorization = `Bearer ${API_TOKEN}`;

    return fetch(`${API_URL}${url}`, { method, headers, body })
      .then(response => {
        info.status = response.status;
        if (Math.floor(response.status / 100) !== 2) {
          info.error = response.statusText;
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(info.error || 'Havent got a JSON');
        }
        return response.json();
      })
      .then(data => {
        if (Math.floor(info.status / 100) !== 2) return { error: data.error ?? info.error, status: info.status };
        return data as T;
      })
      .catch(error => ({
        error: error instanceof Error ? error.message : info.error,
        status: info.status,
      }));
  }

  public get = <T>(url: string): Promise<TRequestResponse<T>> => {
    return this.request<T>({ method: 'GET', url });
  };
}

const fetcher = new Fetcher();

export default fetcher;
