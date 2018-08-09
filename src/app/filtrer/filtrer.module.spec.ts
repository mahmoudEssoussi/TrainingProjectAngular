import { FiltrerModule } from './filtrer.module';

describe('FiltrerModule', () => {
  let filtrerModule: FiltrerModule;

  beforeEach(() => {
    filtrerModule = new FiltrerModule();
  });

  it('should create an instance', () => {
    expect(filtrerModule).toBeTruthy();
  });
});
