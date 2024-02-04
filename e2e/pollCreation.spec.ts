import { test, expect } from '@playwright/test';

test.describe('Poll Creation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`, { waitUntil: 'networkidle' });
  });

  test('80 character limit enforcement on inputs', async ({ page }) => {
    // Test character limit for the question input
    await page.fill('input[placeholder="Type the question here"]', 'a'.repeat(81));
    await expect(page.locator('input[placeholder="Type the question here"]')).toHaveValue('a'.repeat(80));

    // Test character limit for a new answer input
    await page.fill('input[placeholder="Type the answer here"]', 'b'.repeat(81));
    await expect(page.locator('input[placeholder="Type the answer here"]')).toHaveValue('b'.repeat(80));
  });

  test('allows adding up to 10 answers', async ({ page }) => {
    for (let i = 1; i <= 10; i++) {
      await page.fill('input[placeholder="Type the answer here"]', `Answer ${i}`);
      await page.click('button:text("Add")');
    }

    // Ensure that the input field to add answers is not visible after 10 answers are added
    const isVisible = await page.locator('input[placeholder="Type the answer here"]').isVisible();
    expect(isVisible).toBeFalsy();

    // Count the number of answers by testId
    const answersCount = await page.getByTestId('answer-input').count()
    expect(answersCount).toBe(10);
  });

  test('allows editing an answer', async ({ page }) => {
    // Add an answer first
    await page.fill('input[placeholder="Type the answer here"]', 'Initial Answer');
    await page.click('button:text("Add")');

    // Edit the answer
    await page.fill('input[placeholder="Type the answer here"]:nth-of-type(1)', 'Edited Answer');
    await expect(page.locator('input[placeholder="Type the answer here"]:nth-of-type(1)')).toHaveValue('Edited Answer');
  });

  test('allows deleting an answer', async ({ page }) => {
    // Add two answers
    await page.fill('input[placeholder="Type the answer here"]', 'Answer to be deleted');
    await page.click('button:text("Add")');
    await page.fill('input[placeholder="Type the answer here"]', 'Another Answer');
    await page.click('button:text("Add")');

    // Delete the first answer
    await page.click('button:text("Remove"):nth-of-type(1)');

    // Verify deletion
    const isVisible = await page.locator('text="Answer to be deleted"').isVisible();
    expect(isVisible).toBeFalsy();
  });

  test('reset poll clears all fields', async ({ page }) => {
    // Add a question and an answer
    await page.fill('input[placeholder="Type the question here"]', 'Test Question');
    await page.fill('input[placeholder="Type the answer here"]', 'Test Answer');
    await page.click('button:text("Add")');

    // Reset the poll
    await page.click('button:text("Reset")');

    // Assert all fields are cleared
    await expect(page.locator('input[placeholder="Type the question here"]')).toHaveValue('');
    await expect(page.locator('input[placeholder="Type the answer here"]')).toHaveValue('');
  });
});
