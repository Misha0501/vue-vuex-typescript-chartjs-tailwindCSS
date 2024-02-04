import { test, expect } from '@playwright/test';

test.describe('Voting and results display enhancements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await createPollWithTwoAnswers(page);
    });

    async function createPollWithTwoAnswers(page) {
        await page.fill('input[placeholder="Type the question here"]', 'Favorite Color?');
        await page.fill('input[placeholder="Type the answer here"]', 'Blue');
        await page.click('button:text("Add")');
        await page.fill('input[placeholder="Type the answer here"]', 'Red');
        await page.click('button:text("Add")');
    }

    test('validates poll is active with correct setup', async ({ page }) => {
        await expect(page.locator('form')).toBeVisible();
        const optionsCount = await page.locator('input[type="radio"]').count();
        expect(optionsCount).toBeGreaterThanOrEqual(2);
    });

    test('confirms multiple votes and dynamic update of results', async ({ page }) => {
        const totalVotesTestIdSelector = 'total-votes';

        const desiredAmountOfVotes = 3;
        for (let i = 0; i < desiredAmountOfVotes; i++) {
            // Vote
            await page.click('input[type="radio"]:first-child');
            await page.click('button:text("Vote")');
        }

        const updateVotesNumber = parseInt(await page.getByTestId(totalVotesTestIdSelector).textContent())

        // Verify the vote count increased by 1
        await expect(updateVotesNumber).toBe(desiredAmountOfVotes);
    });

    test('reset button correctly resets UI and results', async ({ page }) => {
        await page.click('button:text("Reset")');

        // Verify the voting UI is not visible
        await expect(page.locator('button:text("Vote")')).toBeHidden();

        // Check for the message prompting to add a question and at least two answers
        await expect(page.locator('text="Please add a question and at least two answers to start the poll."')).toBeVisible();
    });

    test('voting UI is not visible with invalid poll configurations', async ({ page }) => {
        // Example: Navigate to a new poll creation or reset current one
        await page.click('button:text("Reset")');
        await page.fill('input[placeholder="Type the question here"]', 'Incomplete Poll?');
        await page.fill('input[placeholder="Type the answer here"]', 'Only One Option');
        await page.click('button:text("Add")');

        // Attempt to navigate to or check the voting section's visibility
        await expect(page.locator('form')).not.toBeVisible();
    });
});
