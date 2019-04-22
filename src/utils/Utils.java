package utils;

public class Utils {
    public static boolean isNull(String s) {
        if (s == null || "".equals(s.trim())) {
            return true;
        } else {
            return false;
        }
    }
}
