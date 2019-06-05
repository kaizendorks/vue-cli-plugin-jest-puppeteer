describe('your Vue app', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  it('can be tested with jest and puppeteer', async () => {
    await expect(page).toMatchElement('h1', 'HelloWorld');
  });
});
