module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/build-and-burn-dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
