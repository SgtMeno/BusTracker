module.exports = function(api) {
  
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: 
      ['react-native-paper/babel',
      ["module:react-native-dotenv",
      {moudleName: "@env",
       path:".env"}]
      ]
      
    
    
  },
  },
     
  };
};
