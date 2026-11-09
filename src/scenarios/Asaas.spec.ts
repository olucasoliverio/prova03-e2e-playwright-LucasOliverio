import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AsaasPage from '../support/pages/AsaasPage';

test.describe('Testes funcionais no site do Asaas', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let asaasPage: AsaasPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.asaas')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    asaasPage = new AsaasPage(page);
    await asaasPage.open(BASE_URL);
  });

  test('Validar carregamento da home com cadastro', async () => {
    await asaasPage.validarHome();
  });

  test('Navegar até a página de preços e taxas', async () => {
    await asaasPage.acessarPrecos();
    await asaasPage.validarPaginaPrecos();
  });

  test('Validar campos obrigatórios no login', async () => {
    await asaasPage.acessarLogin();
    await asaasPage.enviarLoginVazio();
    await asaasPage.validarCamposObrigatorios();
  });
});
