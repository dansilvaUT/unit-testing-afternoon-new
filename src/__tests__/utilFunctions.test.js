import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';
import testUtils from 'react-dom/test-utils';

test('shortenText should not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText  should alter text over 100 characters adding 3 periods at the end', () => {
    const removeWhiteSpace = shortenText(longText);
    expect(removeWhiteSpace).not.toHaveLength(longText.length);
    expect(removeWhiteSpace.slice(-3)).toBe('...');
});

test('wordCount should return a total word count', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUsername should return a post containing property of "displayName"', () => {
    let firstPost = attachUserName(users, posts);
    expect(firstPost[0]).toHaveProperty('displayName');
});

test('attachUserName should remove a post with no matching user', () => {
    const post = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(post).not.toContainEqual(deletedPost);
});