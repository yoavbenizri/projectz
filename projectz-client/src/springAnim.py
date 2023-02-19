import math
import pyperclip

def spring(t):
  return -0.5 * (2.71828 ** (-6 * t)) * (
    -2 * (2.71828 ** (6 * t)) + math.sin(12 * t) + 2 * math.cos(12 * t))

steps = "\n".join([f"{i}% {{ transform: translateY({(1 - spring(i/100)) * 100}px); }}" for i in range(101)])

s = f"""
@keyframes spring {{
{steps}
}}
"""

pyperclip.copy(s)