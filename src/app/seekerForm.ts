export class SeekerForm {
  constructor(
    public userId ?: number,
    public category?:number,
    public description?: string,
    public startDate?: Date,
    ) {}
}
