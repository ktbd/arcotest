// 自定义 Jest 配置
exports.node = (config) => {
  config.moduleNameMapper = {
    '^aaaa/(.+)$': '<rootDir>/$1',
    '^aaaa$': '<rootDir>',
  };
};

exports.client = (config) => {
  config.moduleNameMapper = {
    '^aaaa/(.+)$': '<rootDir>/$1',
    '^aaaa$': '<rootDir>',
  };
};
