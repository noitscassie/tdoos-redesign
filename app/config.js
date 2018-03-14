const config = {
  development: {
    database: 'obscure_sorrows_dev'
  },
  test: {
    database: 'obscure_sorrows_test'
  }
}

function getEnv(env) {
  return config[env];
}

module.exports.getEnv = getEnv;
