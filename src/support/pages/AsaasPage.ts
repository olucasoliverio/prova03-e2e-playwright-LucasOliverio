import { Page, expect } from '@playwright/test';
import AsaasElements from '../elements/AsaasElements';
import BasePage from './BasePage';

export default class AsaasPage extends BasePage {
  readonly elements: AsaasElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.elements = new AsaasElements(page);
  }

  async open(baseUrl: string): Promise<void> {
    await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  }

  async validarHome(): Promise<void> {
    await expect(this.page).toHaveTitle(/Conta digital PJ/);
    await expect(this.elements.getMainHeading()).toHaveText(
      'Conta digital PJ completa e sem mensalidade'
    );
    await expect(this.elements.getSignUpEmailField()).toBeVisible();
    await expect(this.elements.getSignUpButton()).toBeVisible();
  }

  async acessarPrecos(): Promise<void> {
    await this.elements.getPricesLink().click();
  }

  async validarPaginaPrecos(): Promise<void> {
    await expect(this.page).toHaveURL(/\/precos-e-taxas/);
    await expect(this.page).toHaveTitle(/Preços e taxas/);
    await expect(this.elements.getFreeServicesHeading()).toBeVisible();
  }

  async acessarLogin(): Promise<void> {
    await this.elements.getLoginLink().click();
    await expect(this.page).toHaveURL(/\/login\/auth/);
    await expect(this.elements.getLoginHeading()).toBeVisible();
  }

  async enviarLoginVazio(): Promise<void> {
    await expect(this.elements.getLoginEmailField()).toBeEmpty();
    await expect(this.elements.getLoginPasswordField()).toBeEmpty();
    await this.elements.getLoginSubmitButton().click();
  }

  async validarCamposObrigatorios(): Promise<void> {
    await expect(this.elements.getRequiredFieldMessages()).toHaveCount(2);
    await expect(this.page).toHaveURL(/\/login\/auth/);
  }
}
