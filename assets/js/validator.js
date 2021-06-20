class ValidatorS {
    static isEmail(str) {
        let mailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return mailPattern.test(String(str).toLowerCase());
    }
    static isDate(str) {
        let datePattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        return datePattern.test(String(str).toLowerCase());
    }

    static isPhone(str) {
        let phonePattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return phonePattern.test(String(str).toLowerCase());
    }

    static isDomain(str) {
        let urlPattern = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
        return urlPattern.test(String(str).toLowerCase());
    }
}

console.log(ValidatorS.isEmail('mail@gmail.com'));
console.log(ValidatorS.isDate('21-21-2001'));
console.log(ValidatorS.isPhone('79101234567'));
console.log(ValidatorS.isDomain('itgirlschool.ru'));


class Validator {
    isEmail(str) {
        let mailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return mailPattern.test(String(str).toLowerCase());
    }

    isDate(str) {
        let datePattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        return datePattern.test(String(str).toLowerCase());
    }

    isPhone(str) {
        let urlPattern = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
        return urlPattern.test(String(str).toLowerCase());
    }

}
console.log(new Validator().isEmail('mail@gmail.com'));
console.log(new Validator().isDate('21-21-2001'));
console.log(new Validator().isPhone('79101234567'));
console.log(new Validator().isDomain('itgirlschool.ru'));