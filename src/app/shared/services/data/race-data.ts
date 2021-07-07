/* tslint:disable:max-line-length */
const entities = {
   argon: {
      id: 'argon',
      name: 'Argon',
      description: '作为数个世纪前被困在地球之外的人类殖民地的后代，Argon建立起了自己繁荣的文明，版图覆盖了诸多星系，并与许多外星种族建立起了联系。在他们短暂的历史中，Argon联邦一直饱受着战争的苦难，与Xenon的战争尤为如此。然而他们面临的最大挑战来自于一个令人难以置信的缘由：重新与地球取得联系。因为之前的接触使他们陷入了惨烈的地球人冲突中。',
      icon: 'race_argon',
   },
   boron: {
      id: 'boron',
      name: 'Boron',
      description: '来自Nishala星球的水生生物Boron是一个爱好和平的种族。然而虽然是和平主义者，但当他们的世界被Split发现之后，他们被迫开始发展防御并适应了战争。Boron是一个智慧兼具实力的种族，与Argon保持着密切的关系。',
      icon: 'race_boron',
   },
   drone: {
      id: 'drone',
      name: '无人机',
      description: '无人机被设计用来在有限范围内执行任务。为了避免再次发生类似地表改造者Xenon进化的，法律所禁止了对人工智能的研究，无人机的应用范围与能力都因此受到了限制。然而，对Xenon的研究成果带来了无人机技术的进步，这让许多专家感到不安。',
   },
   khaak: {
      id: 'khaak',
      name: 'Kha\'ak',
      description: '虽然这个种族被认为在最终复仇行动中已经被彻底灭绝，但除了Kha\'ak是个类昆虫的蜂群种族且异常执着于消灭那些星门网络使用者外，人们对其知之甚少。作为一个蜂群种族，人们怀疑其个体智能听从于一个公共的、阶级的意志，但在最终复仇行动发生前对这个种族的研究只完成了极少的部分。',
      icon: 'race_khaak',
   },
   paranid: {
      id: 'paranid',
      name: 'Paranid',
      description: '许多种族都认为身强体壮的Paranid傲慢自大，而这通常源于他们出众的数学技巧与宗教热情。Paranid与Split互为盟友，而对Argon充满了深深的不信任感。虽然卷入了数次冲突，但凭借其技术实力以及多层次思维，Paranid都在战术上获得了优势。',
      icon: 'race_paranid',
   },
   split: {
      id: 'split',
      name: 'Split',
      description: '咄咄逼人的Split种族生活在一个领导人在不断变更的社会中，经常有挑战派系崛起并推出一个新的族长。他们的急性子和暴躁的个性使得他们与其他种族时常发生争执，有时甚至会导致战争，这其中最出名的便是与Boron以及与Argon的战争。',
      icon: 'race_split',
   },
   teladi: {
      id: 'teladi',
      name: 'Teladi',
      description: '长得像蜥蜴一样的Teladi人是行星共同体的创始成员之一，对商业和赚取利润有着天生的亲和感。他们与其他种族保持着有良好的关系，尽管有些人认为他们对于利润的渴求令人不安。悠长的寿命使他们对于星门关闭事件有着独特的看法，因为相似的事件也在Teladi人上发生过，更早之前他们与自己的家园星系依阿那姆斯祖拉失去了联系。',
      icon: 'race_teladi',
   },
   terran: {
      id: 'terran',
      name: '地球人',
      description: '来自太阳系的地球人有着悠久的太空飞行和在星门网络中探索的历史。在地球上的地表改造者事件发生后，地球人切断了与银河系其余部分的联系，并被迫孤立地进行了长达几个世纪的重建与发展。他们的短暂回归导致了地球人冲突，而这正好发生在星门网络大规模断开之前。目前尚不知道这场战争是否促成了这一事件。',
      icon: 'race_terran',
   },
   xenon: {
      id: 'xenon',
      name: 'Xenon',
      description: 'Xenon是一种机械种族，由过去地球人所制造的地表改造者飞船发展而来，并最终进化出了智能。它们在银河系的许多区域都一直是个威胁，虽然人们认为星门关闭应该能阻止它们的行动，但是由于其无视时间的特性，它们也可能直接在恒星间漫游。Xenon没有已知的盟友，与它们的沟通往往被都视为民间传说。',
      icon: 'race_xenon',
   },
   none: {
      id: '',
      name: '(none)',
      description: '',
      icon: 'race_none',
   },
};

export const Races = {
   ...entities,
   all: [
      entities.argon,
      entities.boron,
      entities.drone,
      entities.khaak,
      entities.paranid,
      entities.split,
      entities.teladi,
      entities.terran,
      entities.xenon,
   ],
};
