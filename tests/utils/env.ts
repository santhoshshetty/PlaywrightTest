export class env {
  public static readonly BASE_URL: string = process.env.URL ?? "";
  public static readonly EMAIL: string = process.env.EMAIL ?? "";
  public static readonly PASSWORD: string = process.env.PASSWORD ?? "";
}
