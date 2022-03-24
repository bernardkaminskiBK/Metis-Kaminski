export class UserReview {

  private readonly date: string;
  private readonly comment: string;

  constructor(date: string,comment: string) {
    this.date = date;
    this.comment = comment;
  }

  public get reviewDate() : string {
    return this.date;
  }

  public get reviewComment() : string {
    return this.comment;
  }

}
