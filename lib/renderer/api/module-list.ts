// Renderer side modules, please sort alphabetically.
export const rendererModuleList: ElectronInternal.ModuleEntry[] = [
  { name: 'blinkUtils', loader: () => require('./blink-utils') },
  { name: 'clipboard', loader: () => require('./clipboard') },
  { name: 'contextBridge', loader: () => require('./context-bridge') },
  { name: 'crashReporter', loader: () => require('./crash-reporter') },
  { name: 'ipcRenderer', loader: () => require('./ipc-renderer') },
  { name: 'webFrame', loader: () => require('./web-frame') }
];
