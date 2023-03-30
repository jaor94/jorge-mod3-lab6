module.exports = {
    default: {
    //   parallel: 2,
      //format: ['html:cucumber-report.html'],
      format: [
        'html:cucumber-report.html',
        'progress-bar',
        //'./reporter.ts',
      ],
      paths: [
        './tests/features/**/*.feature'
      ],
      require: [
        './tests/steps/**/*.steps.ts',
        './tests/hooks/**/*.hooks.ts',
        'cucumber.config.ts',        
      ],
      requireModule: [
        'ts-node/register'
      ],
      forceExit: true,
      publishQuiet: true,
    }
  }
