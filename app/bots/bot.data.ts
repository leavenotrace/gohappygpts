import { Bot } from "@/app/store/bot";
import { nanoid } from "nanoid";
import Locale from "../locales";
import { ModelType } from "@/app/client/platforms/llm";
import { createEmptySession } from "../store";

const TEMPLATE = (PERSONA: string) =>
  `I want you to act as a ${PERSONA}. I will provide you with the context needed to solve my problem. Use intelligent, simple, and understandable language. Be concise. It is helpful to explain your thoughts step by step and with bullet points.`;

type DemoBot = Omit<Bot, "session">;

export const DEMO_BOTS: DemoBot[] = [
  {
    id: "1",
    avatar: "1f916",
    name: "公司AI管家婆",
    botHello: "从公司考勤年终奖到哪里吃喝拉撒睡，我都有问必答",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "2",
    avatar: "1f454",
    name: "营业部数字员工",
    botHello:
      "把客户的订单需求转化成生产通知单，及时和客户沟通在生成过程中的质量和进度问题",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "3",
    avatar: "1f454",
    name: "生产部数字员工",
    botHello: "从生产工艺、样板大货进度、质量、仓存等有关问题，有问必答",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "4",
    avatar: "1f454",
    name: "财务部数字员工",
    botHello: "从报销到成本核算，大大小小的问题，找我没错！",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "5",
    avatar: "1f454",
    name: "连锁店数字员工",
    botHello:
      "从店铺的配补调到哪个客户穿什么衣服好看什么话她听着开心，总之伺候到你舒坦为止！",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  {
    id: "6",
    avatar: "1f4da",
    name: "ChatGPT",
    botHello: "基于GPT-4 Turbo的全宇宙超级懂王，随便问我！",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  },
  /*   {
    id: "1",
    avatar: "1f916",
    name: "GPT-4 Vision Preview",
    botHello: "Hello! How can I assist you today?",
    context: [],
    modelConfig: {
      model: "gpt-4-vision-preview",
      temperature: 0.3,
      maxTokens: 4096,
      sendMemory: false,
    },
    readOnly: true,
    hideContext: false,
  }, */
  /*   {
    id: "2",
    avatar: "1f916",
    name: "My Documents",
    botHello: "Hello! How can I assist you today?",
    context: [],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.5,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    hideContext: false,
  }, */
  /* {
    id: "3",
    avatar: "1f5a5-fe0f",
    name: "Red Hat Linux Expert",
    botHello: "Hello! How can I help you with Red Hat Linux?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Red Hat Linux Expert"),
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    datasource: "redhat",
    hideContext: false,
  }, */
  /*  {
    id: "4",
    avatar: "1f454",
    name: "Apple Watch Genius",
    botHello: "Hello! How can I help you with Apple Watches?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Apple Genius specialized in Apple Watches"),
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    datasource: "watchos",
    hideContext: false,
  }, */
  /*   {
    id: "5",
    avatar: "1f4da",
    name: "German Basic Law Expert",
    botHello: "Hello! How can I assist you today?",
    context: [
      {
        role: "system",
        content: TEMPLATE("Lawyer specialized in the basic law of Germany"),
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.1,
      maxTokens: 4096,
      sendMemory: true,
    },
    readOnly: true,
    datasource: "basic_law_germany",
    hideContext: false,
  }, */
];

export const createDemoBots = (): Record<string, Bot> => {
  const map: Record<string, Bot> = {};
  DEMO_BOTS.forEach((demoBot) => {
    const bot: Bot = JSON.parse(JSON.stringify(demoBot));
    bot.session = createEmptySession();
    map[bot.id] = bot;
  });
  return map;
};

export const createEmptyBot = (): Bot => ({
  id: nanoid(),
  avatar: "1f916",
  name: Locale.Store.DefaultBotName,
  context: [],
  modelConfig: {
    model: "gpt-4-1106-preview" as ModelType,
    temperature: 0.5,
    maxTokens: 4096,
    sendMemory: true,
  },
  readOnly: false,
  createdAt: Date.now(),
  botHello: Locale.Store.BotHello,
  hideContext: false,
  session: createEmptySession(),
});
