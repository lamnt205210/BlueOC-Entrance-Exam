import unittest


def most_frequent_length(strings: list[str]) -> list[str]:
    if not strings:
        return []

    str_map = {}

    for string in strings:
        length = len(string)
        if length not in str_map:
            str_map[length] = []

        str_map[length].append(string)

    max_length = max(str_map)

    result = str_map[max_length]

    return result


class TestMostFrequentLength(unittest.TestCase):

    def test_empty(self):
        self.assertEqual(most_frequent_length([]), [])

    def test_first(self):
        self.assertEqual(most_frequent_length(["a", "bb", "ccc", "dd", "e"]), ["ccc"])

    def test_second(self):
        self.assertEqual(
            most_frequent_length(["a", "ab", "abc", "cd", "def", "gh"]), ["abc", "def"]
        )

    def test_third(self):
        self.assertEqual(
            most_frequent_length(["abc", "de", "fghij", "klmn", "opqrstu", "vwxyz"]),
            ["opqrstu"],
        )

    def test_fourth(self):
        self.assertEqual(
            most_frequent_length(
                [
                    "apple",
                    "banana",
                    "kiwi",
                    "grape",
                    "fig",
                    "date",
                    "peach",
                    "plum",
                    "melon",
                ]
            ),
            ["banana"],
        )

    def test_fifth(self):
        self.assertEqual(
            most_frequent_length(
                [
                    "hello",
                    "world",
                    "Python",
                    "hi",
                    "how",
                    "are",
                    "you",
                    "doing",
                    "superduper",
                    "great",
                    "database",
                    "functionpt",
                    "randomchar",
                ]
            ),
            ["superduper", "functionpt", "randomchar"],
        )


if __name__ == "__main__":
    unittest.main()
