# Animation Components Usage Guide

This guide demonstrates how to use all the animation components and enhanced features in the NeoTech website.

## Components Available

### 1. ScrollReveal Component
Motion-powered scroll animations that reveal content as you scroll.

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' | 'fade' (default: 'up')
- `delay`: number (default: 0) - Delay in seconds before animation starts
- `duration`: number (default: 0.6) - Animation duration in seconds
- `distance`: number (default: 50) - Distance to animate from
- `className`: string - Additional CSS classes

**Example Usage:**
```tsx
import ScrollReveal from '../components/ScrollReveal';

<ScrollReveal direction="up" delay={0.2} duration={0.8}>
  <YourComponent />
</ScrollReveal>
```

### 2. GlowingOrb Component
Animated glowing orbs for background effects.

**Props:**
- `size`: number (default: 300) - Size in pixels
- `color`: string (default: '#00E5FF') - Color hex code
- `intensity`: 'low' | 'medium' | 'high' (default: 'medium')
- `position`: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' (default: 'center')
- `className`: string - Additional CSS classes

**Example Usage:**
```tsx
import GlowingOrb from '../components/GlowingOrb';

<GlowingOrb 
  size={400} 
  color="#00E5FF" 
  intensity="low" 
  position="top-right" 
/>
```

### 3. GlassCard Component (Enhanced)
Reusable glassmorphism card with enhanced hover effects.

**Props:**
- `children`: ReactNode - Card content
- `className`: string - Additional CSS classes
- `glowColor`: string - Color for glow effect
- `intensity`: 'low' | 'medium' | 'high' (default: 'medium')
- `neonBorder`: 'electric' | 'aqua' | 'dual' | 'none' (default: 'none')
- `pulse`: boolean - Enable pulse animation
- `onClick`: () => void - Click handler

**Example Usage:**
```tsx
import GlassCard from '../components/GlassCard';

<GlassCard 
  glowColor="#00E5FF" 
  intensity="medium" 
  neonBorder="dual"
  pulse={true}
>
  <h3>Card Title</h3>
  <p>Card content</p>
</GlassCard>
```

### 4. GPUCircuitDivider Component (Enhanced)
Animated circuit divider with improved animations.

**Props:**
- `variant`: 'horizontal' | 'vertical' (default: 'horizontal')
- `animated`: boolean (default: true) - Enable animations
- `color`: string (default: '#1a1a1a') - Color of circuit lines

**Example Usage:**
```tsx
import GPUCircuitDivider from '../components/GPUCircuitDivider';

<GPUCircuitDivider 
  animated={true} 
  color="rgba(255, 255, 255, 0.3)" 
/>
```

### 5. PageTransition Component (Enhanced)
Smooth page transitions with blur effects.

**Usage:**
```tsx
import PageTransition from '../components/PageTransition';

<Route path="/page" element={
  <PageTransition>
    <YourPage />
  </PageTransition>
} />
```

### 6. Header Component (Enhanced)
Navigation with active indicators.

**Features:**
- Automatic active state detection based on current route
- Visual indicators for active links
- Smooth transitions and hover effects

**Already integrated in App.tsx**

## Best Practices

1. **ScrollReveal**: Use staggered delays for sequential animations
   ```tsx
   <ScrollReveal direction="up" delay={0.1}>First</ScrollReveal>
   <ScrollReveal direction="up" delay={0.2}>Second</ScrollReveal>
   <ScrollReveal direction="up" delay={0.3}>Third</ScrollReveal>
   ```

2. **GlowingOrb**: Use low intensity for subtle backgrounds
   ```tsx
   <GlowingOrb intensity="low" position="top-right" />
   ```

3. **GlassCard**: Combine with ScrollReveal for enhanced effects
   ```tsx
   <ScrollReveal direction="fade">
     <GlassCard neonBorder="dual">
       Content
     </GlassCard>
   </ScrollReveal>
   ```

## Animation Features

- ✅ Motion-powered scroll reveals
- ✅ Enhanced hover effects on all interactive elements
- ✅ Animated circuit dividers with pulse effects
- ✅ Glowing orbs with mouse tracking
- ✅ Smooth page transitions with blur
- ✅ Active navigation indicators
- ✅ GlassCard with multiple intensity levels
- ✅ Optimized performance with GPU acceleration




