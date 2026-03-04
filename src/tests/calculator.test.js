const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(45, 0)).toBe(0);
    });

    test('should multiply two negative numbers (positive result)', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative (negative result)', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(100, 50)).toBe(5000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should divide two negative numbers (positive result)', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should return zero when dividing zero', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 3.5)).toBeCloseTo(3, 0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(20, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Edge Cases', () => {
    test('should handle very large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
    });

    test('should handle operations with negative zero', () => {
      expect(add(-0, 5)).toBe(5);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger divisor', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return zero when dividend is divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with divisor of zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => modulo(-10, 0)).toThrow('Cannot perform modulo with divisor of zero');
    });
  });

  describe('Power', () => {
    test('should calculate power with positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with exponent of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent of one', () => {
      expect(power(5, 1)).toBe(5);
    });

    test('should calculate large power', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate zero to positive power', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root resulting in decimal', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });

    test('should throw error for large negative number', () => {
      expect(() => squareRoot(-100)).toThrow('Cannot calculate square root of negative number');
    });

    test('should calculate square root of small decimal', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });
  });
});
