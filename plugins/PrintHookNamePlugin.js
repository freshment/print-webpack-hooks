const PLUGIN_NAME = 'Webpack Custom Plugin'

class PrintWebapckCompilerHookPlugin {
  apply(compiler) {
    console.log('apply~~')
    // 1.entryOption
    compiler.hooks.entryOption.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-entryOption')
    })
    // 2.afterPlugins
    compiler.hooks.afterPlugins.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-afterPlugins')
    })
    // 3.afterResolvers
    compiler.hooks.afterResolvers.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-afterResolvers')
    })
    // 4.environment
    compiler.hooks.environment.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-environment')
    })
    // 5.afterEnvironment
    compiler.hooks.afterEnvironment.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-afterEnvironment')
    })
    // 6.beforeRun
    compiler.hooks.beforeRun.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-beforeRun')
    })
    // 7.run
    compiler.hooks.run.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-run')
    })
    // 8.watchRun
    compiler.hooks.watchRun.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-watchRun')
    })
    // 9.normalModuleFactory
    compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-normalModuleFactory')
    })
    // 10.contextModuleFactory
    compiler.hooks.contextModuleFactory.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-contextModuleFactory')
    })
    // 11.beforeCompile
    compiler.hooks.beforeCompile.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-beforeCompile')
    })
    // 12.beforeCompile
    compiler.hooks.beforeCompile.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-beforeCompile')
    })
    // 13.compile
    compiler.hooks.compile.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-compile')
    })
    // 14.beforeCompile
    compiler.hooks.beforeCompile.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-beforeCompile')
    })
    // 15.thisCompilation
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-thisCompilation')
    })
    // 16.compilation
    compiler.hooks.compilation.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-compilation')
    })
    // 17.make
    compiler.hooks.make.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-make')
    })
    // 18.afterCompile
    compiler.hooks.afterCompile.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-afterCompile')
    })       
    // 19.shouldEmit
    compiler.hooks.shouldEmit.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-shouldEmit')
    })
    // 20.needAdditionalPass
    compiler.hooks.needAdditionalPass.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-needAdditionalPass')
    })
    // 21.emit
    compiler.hooks.emit.tap(PLUGIN_NAME, () => {
      console.log('compilerHook-emit')
    })
  }
}

module.exports = PrintWebapckCompilerHookPlugin
