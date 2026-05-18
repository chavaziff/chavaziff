/* Tweaks panel — accent color, motion, section markers */
const { useEffect } = React;

function ChavaTweaks() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Re-apply to live page whenever tweaks change
  useEffect(() => {
    if (window.__applyTweaks) window.__applyTweaks(t);
  }, [t.accent, t.motion, t.sectionMarkers]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakColor
        label="Color"
        value={t.accent}
        onChange={(v) => setTweak('accent', v)}
        options={['#3D7A74', '#5C3A2E', '#2D4A6B', '#1A1A1A', '#7A3D3D']}
      />
      <TweakSection label="Display" />
      <TweakToggle
        label="Motion"
        value={t.motion}
        onChange={(v) => setTweak('motion', v)}
      />
      <TweakToggle
        label="Section markers"
        value={t.sectionMarkers}
        onChange={(v) => setTweak('sectionMarkers', v)}
      />
    </TweaksPanel>
  );
}

// (defaults are read from window.TWEAK_DEFAULTS set in index.html)

const __chava_root = document.createElement('div');
document.body.appendChild(__chava_root);
ReactDOM.createRoot(__chava_root).render(<ChavaTweaks />);
