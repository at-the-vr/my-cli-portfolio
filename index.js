// Run `npm start` to start the demo
import {
  intro,
  outro,
  spinner,
} from '@clack/prompts';
import { setTimeout as sleep } from 'node:timers/promises';
import color from 'picocolors';

async function main() {
  console.log();
  const s = spinner();
  intro(color.inverse(" Atharva's Portfolio"));

  s.start('Loading stuff');
  await sleep(1000);
  s.stop();
  outro("Frontend Enthusiast, Documentation Fanatic \n \ \ Learn more about me at https://atharvapise.vercel.app/");

  await sleep(1000);
  return process.exit(0);
}

main().catch(console.error);
