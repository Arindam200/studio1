/** Stylized ASCII portraits for About Us team cards — keyed by member name. */
export const teamAsciiArt: Record<string, string> = {
  "Arindam Majumder": String.raw`
      ╭──────────────╮
     ╱   ┌───────┐   ╲
    │    │ ●   ● │    │
    │    │   ‿   │    │
    │    └───┬───┘    │
    │       ╱ ╲       │
    │      ╱   ╲      │
    │     ╱  ~  ╲     │
     ╲   ╱       ╲   ╱
      ╰──────────────╯
         ╱       ╲
        ╱         ╲`,

  "Amitesh Anand": String.raw`
      ╭──────────────╮
     ╱               ╲
    │    ┌─────────┐   │
    │    │ ◉     ◉ │   │
    │    │    ─    │   │
    │    └────┬────┘   │
    │         │        │
    │    ╭────┴────╮   │
    │    │  ✎  ✎  │   │
     ╲   ╰─────────╯  ╱
      ╰──────────────╯
        │         │
       ╱           ╲`,

  "Shivay Lamba": String.raw`
      ╭──────────────╮
     ╱  ┌─────────┐  ╲
    │   │ ◎     ◎ │   │
    │   │    ▽    │   │
    │   └────┬────┘   │
    │    ╱───┴───╲    │
    │   │ { } ML │   │
    │   │  ◈ ◈  │   │
     ╲  ╰───────╯  ╱
      ╰──────────────╯
       ╱    │    ╲
      ╱     │     ╲`,
};

export function getTeamAsciiArt(name: string): string {
  return teamAsciiArt[name] ?? String.raw`
      ╭──────────────╮
     │    ┌─────┐    │
     │    │ ○ ○ │    │
     │    │  ‿  │    │
     │    └──┬──┘    │
      ╰──────────────╯`;
}
