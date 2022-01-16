import * as lang from './lang.js';
class Strings {
    constructor() {
        this.actions = new StringsActions();
        this.buttonGrid = new StringsButtonGrid();
    }
    // Not all will get 
    get welcomeMessage() {
        switch (lang.langID) {
            case 'enus': return 'Welcome to Astroborn!';
            case 'dede': return 'Wilkomen bei Astroborn!';
            case 'zhcn': return '欢迎来到Astroborn！'; // huān​yíng lái​dào Astroborn!
        }
    }
}
class StringsActions {
    youPickUpItem(item) {
        // TODO: For English, what do I need to do to be able to support outputting various
        // types of qualified phrases for picking up the item? For example:
        // "You pick up Mega Sword 1." which is in capitalized because it's a proper noun.
        // "You pick up a big sword." which is lower cased because it's not a proper noun and the item definition would have Big Sword as the name.
        // "You pick up the big sword." When and how to distinguish between these?
        // I want each language to feel natural in the narrative. 
        switch (lang.langID) {
            case 'enus': return `You pick up ${item.name.get(lang.langID)}.`;
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
}
class StringsButtonGrid {
    get look() {
        switch (lang.langID) {
            case 'enus': return 'Look';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get lookAt() {
        switch (lang.langID) {
            case 'enus': return 'Look At...';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get use() {
        switch (lang.langID) {
            case 'enus': return 'Use...';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get talk() {
        switch (lang.langID) {
            case 'enus': return 'Talk...';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get get() {
        switch (lang.langID) {
            case 'enus': return 'Get...';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get item() {
        switch (lang.langID) {
            case 'enus': return 'Item...';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemLookAt() {
        switch (lang.langID) {
            case 'enus': return 'Look';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemUse() {
        switch (lang.langID) {
            case 'enus': return 'Use';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemEquip() {
        switch (lang.langID) {
            case 'enus': return 'Equip';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemEquipFull() {
        // TODO: Would like a more narrative description. "CAnnot fit any more items around your body"
        switch (lang.langID) {
            case 'enus': return 'You cannot equip any more items.';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemEquipDupe() {
        // TODO: Should maybe say the kind of item (helmet or something, maybe "on your head").
        switch (lang.langID) {
            case 'enus': return 'You cannot equip more than one of these kind of items.';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemEquipSuccess() {
        switch (lang.langID) {
            case 'enus': return 'You equip it.';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
    get itemUnequip() {
        switch (lang.langID) {
            case 'enus': return 'Unequip';
            case 'dede': return ''; // LANG-DEDE
            case 'zhcn': return ''; // LANG-ZHCN
        }
    }
}
export const strings = new Strings();
