module.exports = {
    // different configs for different dbs (dev, prod, testing, qa, staging, etc)
    development: {
        client: 'sqlite3',
        connection: {
            filename: './produce.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
    },

    production: {},
    testing: {},
}