import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getThemeById,
  paletteToCssVars,
  pickRandomTheme,
  resolveThemePalette,
  THEMES,
} from './themes';

test('defines exactly 5 gradient themes with mesh gradients and dark/light palettes', () => {
  assert.equal(THEMES.length, 5);
  const expectedIds = [
    'cyberpunk-neon',
    'aurora-borealis',
    'sunset-vibe',
    'minimal-frost',
    'royal-gold',
  ];
  assert.deepEqual(
    THEMES.map((t) => t.id),
    expectedIds
  );

  for (const theme of THEMES) {
    assert.ok(theme.name.en);
    assert.ok(theme.name.fa);
    assert.ok(theme.dark.bgGradient.includes('radial-gradient'));
    assert.ok(theme.light.bgGradient.includes('radial-gradient'));
    assert.ok(theme.dark.accentGradient.includes('linear-gradient'));
    assert.ok(theme.light.accentGradient.includes('linear-gradient'));
    assert.notEqual(theme.dark.bgPrimary, theme.light.bgPrimary);
  }
});

test('pickRandomTheme selects across the 5 theme slots deterministically with custom rng', () => {
  assert.equal(pickRandomTheme(() => 0.0).id, 'cyberpunk-neon');
  assert.equal(pickRandomTheme(() => 0.5).id, 'sunset-vibe');
  assert.equal(pickRandomTheme(() => 0.99).id, 'royal-gold');
});

test('resolveThemePalette uses defaultPolarity when manual override is null', () => {
  const cyberpunk = getThemeById('cyberpunk-neon');
  const resolvedDefault = resolveThemePalette(cyberpunk, null);
  assert.equal(resolvedDefault.polarity, 'dark');
  assert.equal(resolvedDefault.palette.bgPrimary, cyberpunk.dark.bgPrimary);

  const frost = getThemeById('minimal-frost');
  const resolvedLight = resolveThemePalette(frost, null);
  assert.equal(resolvedLight.polarity, 'light');
  assert.equal(resolvedLight.palette.bgPrimary, frost.light.bgPrimary);
});

test('resolveThemePalette respects manual dark/light override and exports gradient CSS variables', () => {
  const aurora = getThemeById('aurora-borealis');
  const forcedLight = resolveThemePalette(aurora, 'light');
  assert.equal(forcedLight.polarity, 'light');

  const vars = paletteToCssVars(forcedLight.palette);
  assert.equal(vars['--bg-primary'], aurora.light.bgPrimary);
  assert.equal(vars['--bg-gradient'], aurora.light.bgGradient);
  assert.equal(vars['--accent-gradient'], aurora.light.accentGradient);
});
