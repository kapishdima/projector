export const HasInprogressProjectMessage = 'Not possible to create. There are unfinished projects';
export class HasInprogressProject extends Error {
  constructor() {
    super(HasInprogressProjectMessage);

    Object.setPrototypeOf(this, HasInprogressProject.prototype);
  }
}
