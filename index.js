// Run `npm start` to start the demo
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
  
  while (true) {
    console.log();
    const s = spinner();

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
    

    const aboutMe =
      'Frontend Enthusiast, Documentation Fanatic \n   Learn more about me at https://atharvapise.vercel.app/';

    // Create a colorful box using ANSI escape codes
    // const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    //   |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    //   +---------------------------------------------------------------+
    //   | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                     \x1b[38;5;51m|
    //   | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    //   | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      \x1b[38;5;51m|
    //   +----------------------------------------------------------------+\x1b[0m`;

    const promptList = await select({
      message: `Hey there 👋 What would you like to know about me \n`,
      options: [
        { value: 'about', label: 'About Me' },
        { value: 'experience', label: 'Experience' },
        { value: 'skill', label: 'Skills', hint: 'oh no' },
        { value: 'contact', label: 'Contact', hint: 'oh no' },
      ],
    });

    s.start('Loading');
    await sleep(2000);
    s.stop();

    switch (promptList) {
      case 'about':
        outro(aboutMe);
        break;
      case 'experience':
        outro(aboutMe);
        break;
      case 'skill':
        outro(aboutMe);
        break;
      case 'contact':
        outro(aboutMe);
        break;
    }

    // outro(
    //   `${promptList} ${typeof promptList} ----------- Frontend Enthusiast, Documentation Fanatic \n \ \ Learn more about me at https://atharvapise.vercel.app/`
    // );

    await sleep(1000);
    // return process.exit(0);
  }
}

main().catch(console.error);
