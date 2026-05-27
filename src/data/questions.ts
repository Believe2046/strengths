export type Question = {
  id: number
  left: string
  right: string
  leftTrait: string
  rightTrait: string
}

export const questions: Question[] = [
  { id: 1, left: '我喜欢先确定清晰目标，再集中精力推进。', right: '我更喜欢根据现场变化灵活调整方向。', leftTrait: '目标驱动', rightTrait: '创意联想' },
  { id: 2, left: '我会主动把任务整理成流程和清单。', right: '我会先抓住机会行动，再逐步完善细节。', leftTrait: '纪律秩序', rightTrait: '行动推进' },
  { id: 3, left: '答应别人的事，我通常会尽力做到。', right: '我更愿意把精力投入到最有突破感的事情上。', leftTrait: '责任担当', rightTrait: '竞争进取' },
  { id: 4, left: '遇到问题时，我会先定位根因。', right: '遇到问题时，我会先调动相关的人一起处理。', leftTrait: '问题修复', rightTrait: '协作整合' },
  { id: 5, left: '我喜欢用有说服力的表达推动别人理解。', right: '我更习惯安静分析，再给出判断。', leftTrait: '表达影响', rightTrait: '分析思维' },
  { id: 6, left: '我能比较敏锐地感受到他人的情绪变化。', right: '我更关注事情的效率、结构和结果。', leftTrait: '共情连接', rightTrait: '目标驱动' },
  { id: 7, left: '我喜欢研究一个领域，并不断提高熟练度。', right: '我喜欢站在未来视角设计长期路径。', leftTrait: '学习探索', rightTrait: '战略前瞻' },
  { id: 8, left: '我愿意帮助别人发现自己的进步空间。', right: '我愿意在竞争中不断刷新自己的标准。', leftTrait: '成长培育', rightTrait: '竞争进取' },
  { id: 9, left: '我倾向于包容不同个性和表达方式。', right: '我倾向于快速做出决定并承担后果。', leftTrait: '包容欣赏', rightTrait: '自信决断' },
  { id: 10, left: '我喜欢把复杂事情拆成有逻辑的部分。', right: '我喜欢把不同想法组合成新的方案。', leftTrait: '分析思维', rightTrait: '创意联想' },
  { id: 11, left: '我习惯在团队中推动大家形成合力。', right: '我习惯在关键时刻站出来表达观点。', leftTrait: '协作整合', rightTrait: '表达影响' },
  { id: 12, left: '我看重稳定节奏和明确边界。', right: '我看重变化空间和探索可能。', leftTrait: '纪律秩序', rightTrait: '学习探索' },
  { id: 13, left: '我会优先解决阻碍进展的具体问题。', right: '我会优先判断这件事长期是否值得做。', leftTrait: '问题修复', rightTrait: '战略前瞻' },
  { id: 14, left: '我能鼓励别人把潜力变成行动。', right: '我能用结果激励自己持续向前。', leftTrait: '成长培育', rightTrait: '目标驱动' },
  { id: 15, left: '我更容易相信自己的判断。', right: '我更愿意先听取各方意见。', leftTrait: '自信决断', rightTrait: '包容欣赏' },
  { id: 16, left: '我会为了完成承诺而持续投入。', right: '我会为了抓住机会而迅速启动。', leftTrait: '责任担当', rightTrait: '行动推进' },
  { id: 17, left: '我喜欢用事实和证据支持观点。', right: '我喜欢用故事和画面感染他人。', leftTrait: '分析思维', rightTrait: '表达影响' },
  { id: 18, left: '我在关系中更关注对方真实感受。', right: '我在关系中更关注共同目标达成。', leftTrait: '共情连接', rightTrait: '协作整合' },
  { id: 19, left: '我喜欢接受挑战并证明自己。', right: '我喜欢沉下心学习并完善能力。', leftTrait: '竞争进取', rightTrait: '学习探索' },
  { id: 20, left: '我愿意维护公平、接纳和尊重。', right: '我愿意维护标准、规则和秩序。', leftTrait: '包容欣赏', rightTrait: '纪律秩序' },
  { id: 21, left: '我会从未来趋势反推现在该做什么。', right: '我会从当前问题反推根因在哪里。', leftTrait: '战略前瞻', rightTrait: '问题修复' },
  { id: 22, left: '我喜欢主动把事情推起来。', right: '我喜欢把事情想清楚再行动。', leftTrait: '行动推进', rightTrait: '分析思维' },
  { id: 23, left: '我擅长把人连接起来共同完成事情。', right: '我擅长独立判断并给出明确方向。', leftTrait: '协作整合', rightTrait: '自信决断' },
  { id: 24, left: '我容易看见别人身上的成长可能。', right: '我容易看见方案中的新组合方式。', leftTrait: '成长培育', rightTrait: '创意联想' },
  { id: 25, left: '我希望自己的工作有清楚可衡量的结果。', right: '我希望自己的工作有持续学习的空间。', leftTrait: '目标驱动', rightTrait: '学习探索' },
  { id: 26, left: '我会认真处理他人的情绪反馈。', right: '我会认真处理系统中的漏洞和问题。', leftTrait: '共情连接', rightTrait: '问题修复' },
  { id: 27, left: '我在压力下会更想马上行动。', right: '我在压力下会更想制定秩序。', leftTrait: '行动推进', rightTrait: '纪律秩序' },
  { id: 28, left: '我重视承诺和长期可信度。', right: '我重视愿景和未来可能性。', leftTrait: '责任担当', rightTrait: '战略前瞻' },
  { id: 29, left: '我喜欢通过表达争取认同。', right: '我喜欢通过成绩证明价值。', leftTrait: '表达影响', rightTrait: '竞争进取' },
  { id: 30, left: '我能容纳不同立场并寻找共同点。', right: '我能在复杂信息中找到关键逻辑。', leftTrait: '包容欣赏', rightTrait: '分析思维' }
]
