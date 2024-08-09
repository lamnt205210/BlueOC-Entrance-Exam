import unittest


def two_largest(arr: list[int]) -> int:
    if len(arr) < 2:
        raise ValueError("Array must contain at least two elements")

    max_val = second_max_val = float("-inf")

    for num in arr:
        if num > max_val:
            second_max_val = max_val
            max_val = num
        elif num > second_max_val and num <= max_val:
            second_max_val = num

    return max_val + second_max_val


class TwoLargestTest(unittest.TestCase):
    def test_empty(self):
        with self.assertRaises(ValueError):
            two_largest([])

    def test_single_element(self):
        with self.assertRaises(ValueError):
            two_largest([1])

    def test_two_elements(self):
        self.assertEqual(two_largest([1, 2]), 3)

    def test_three_elements(self):
        self.assertEqual(two_largest([3, 4, 7]), 11)

    def test_four_elements(self):
        self.assertEqual(two_largest([30, 28, 69, 20]), 99)

    def test_duplicate_elements(self):
        self.assertEqual(two_largest([10, 10, 10, 10]), 20)

    def test_duplicate_elements_with_second_max(self):
        self.assertEqual(two_largest([10, 10, 20, 20]), 40)

    def test_negative_elements(self):
        self.assertEqual(two_largest([-10, -20, -30, -40]), -30)


if __name__ == "__main__":
    unittest.main()
