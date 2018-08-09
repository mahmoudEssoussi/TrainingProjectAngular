import { DynamicTabModule } from './dynamic-tab.module';

describe('DynamicTabModule', () => {
  let dynamicTabModule: DynamicTabModule;

  beforeEach(() => {
    dynamicTabModule = new DynamicTabModule();
  });

  it('should create an instance', () => {
    expect(dynamicTabModule).toBeTruthy();
  });
});
