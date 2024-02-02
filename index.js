#!/usr/bin/env node
import {
  intro,
  outro,
  spinner,
  select,
  isCancel,
  cancel,
  text,
} from '@clack/prompts';
import { setTimeout as sleep } from 'node:timers/promises';
import color from 'picocolors';

async function main() {
  console.log();
  const s = spinner();

  // M Y  I N F O R M A T I O N

  const aboutMe = 'Frontend Enthusiast, Documentation Fanatic';

  const myExperience = `Frontend Intern @Infineon Technologies \n   Tech Stack Vue, Vuex, Bootstrap \n
   Python for ML/AI Intern @Elite Techno Groups \n   Python, Google Colab`;

  const skillSet = 'HTML/CSS/JS, Vue, Astro, Starlight, Bootstrap';

  const contactMe = 'Reach me @https://twitter.com/at_the_vr';

  // P R O M P T I N G

  intro(color.inverse(" Atharva's Portfolio"));

  const value = await text({
    message: "May I know who's talking?",
    placeholder: 'Not sure',
    initialValue: 'Anonymous',
    validate(value) {
      if (value.length < 3) {
        outro("Daring today aren't we");
        return process.exit(0);
      }
    },
  });

  if (isCancel(value)) {
    cancel('Have a Good Day 🤝');
    process.exit(0);
  }

  const promptList = await select({
    message: `What would you like to know about me 😄\n`,
    options: [
      { value: 'about', label: 'About Me' },
      { value: 'experience', label: 'Experience' },
      { value: 'skill', label: 'Skills' },
      { value: 'contact', label: 'Contact' },
    ],
  });

  s.start('Searching from DB');
  await sleep(2000);
  s.stop();

  switch (promptList) {
    case 'about':
      outro(aboutMe);
      break;
    case 'experience':
      outro(myExperience);
      break;
    case 'skill':
      outro(skillSet);
      break;
    case 'contact':
      outro(contactMe);
      break;
  }

  await sleep(1000);
}

main().catch(console.error);
