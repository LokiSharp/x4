export enum ModuleTypes {
   connectionmodule = '连接模块',
   production = '生产模块',
   defencemodule = '防御模块',
   dockarea = '港口模块',
   habitation = '居住模块',
   pier = '码头',
   storage = '仓储模块',
   buildmodule = '建造模块',
   ventureplatform = '远征模块'
}

export const AllModuleTypes = [
   ModuleTypes.habitation,
   ModuleTypes.buildmodule,
   ModuleTypes.dockarea,
   ModuleTypes.pier,
   ModuleTypes.storage,
   ModuleTypes.defencemodule,
   ModuleTypes.connectionmodule
   // ModuleTypes.ventureplatform
];
