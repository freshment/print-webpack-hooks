const PLUGIN_NAME = 'Webpack Custom Plugin'

class PrintWebapckCompilerHookPlugin {
  apply(compiler) {
    const hooksList = Object.keys(compiler.hooks)
    hooksList.forEach(hookName => {
      const hook = compiler.hooks[hookName]
      if (hook.tap && typeof hook.tap === 'function')
        hook.tap(PLUGIN_NAME, () => {
          console.log('webpack_compile_hook:', hookName)
        })
    })

  }
}

module.exports = PrintWebapckCompilerHookPlugin
