declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PRIVATE_KEY?: `0x${string}`;
    }
  }
}
