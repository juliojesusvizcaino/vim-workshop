from typing import Iterable, Iterator, Literal, Tuple



def extend_line(line: Iterable[str]) -> Iterator[Tuple[str, str]]:
    for char in line:
        if char in {"─", " ", " ", "╶", "╴", "┘", "└", "┴"}:
            yield char, " "
        elif char in {"┌", "┬", "┐", "├", "┼", "┤", "│"}:
            yield char, "│"
        elif char in {"╵"}:
            yield "│", " "
        elif char == "╷":
            yield "│", "│"
        elif char == "\n":
            pass
        else:
            raise ValueError(f"Invalid maze: '{char}'")


if __name__ == "__main__":
    with open('./maze-level-2.txt') as f:
        new_maze = '\n'.join(
            ''.join(extended_line)
            for line in f.readlines()
            for extended_line in zip(*extend_line(line))
        )

        print(new_maze)

