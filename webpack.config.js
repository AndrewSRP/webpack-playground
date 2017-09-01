module.exports = {
  entry: {
    'entry': './app/entry2015.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	options: {
	presets: [[
            'env', {
              targets: {
                browsers: ['last 2 versions']
              }
            }
          ]]
	}
      }
    ]
  }
};
