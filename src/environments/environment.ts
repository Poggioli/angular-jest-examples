const baseUrl = 'https://localhost'
const port = 8080
const apiVersion = 'v1'

export const environment = {
  production: false,
  api: {
    baseUrl: `${baseUrl}:${port}/${apiVersion}`,
    endpoints: {
      vaccines: 'vaccine'
    }
  }
}
