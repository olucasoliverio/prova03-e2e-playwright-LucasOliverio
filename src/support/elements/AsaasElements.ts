import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class AsaasElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMainHeading(): Locator {
    return this.page.getByRole('heading', { level: 1 });
  }

  getSignUpEmailField(): Locator {
    return this.page.getByRole('textbox', { name: 'Preencha seu e-mail' });
  }

  getSignUpButton(): Locator {
    return this.page.getByRole('button', { name: 'Criar conta grátis' });
  }

  getPricesLink(): Locator {
    return this.page.getByRole('navigation').getByRole('link', {
      name: 'Preços'
    });
  }

  getFreeServicesHeading(): Locator {
    return this.page.getByRole('heading', {
      name: 'Conheça nossos serviços gratuitos'
    });
  }

  getLoginLink(): Locator {
    return this.page.getByRole('link', { name: 'Acessar minha conta' });
  }

  getLoginHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Acesse sua conta' });
  }

  getLoginEmailField(): Locator {
    return this.page.getByRole('textbox', { name: 'E-mail' });
  }

  getLoginPasswordField(): Locator {
    return this.page.getByRole('textbox', { name: 'Senha' });
  }

  getLoginSubmitButton(): Locator {
    return this.page.getByRole('button', { name: 'Acessar conta' });
  }

  getRequiredFieldMessages(): Locator {
    return this.page.getByText('Este campo é obrigatório');
  }
}
