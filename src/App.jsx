import React, { useState } from "react";

const safetyTips = [
  {
    number: "01",
    title: "Rinse under running water",
    text: "Wash fruits and vegetables before preparing or eating them, even if you plan to peel them.",
    icon: "💧",
  },
  {
    number: "02",
    title: "Skip the soap",
    text: "Clean water is enough for produce. Soap and household cleaners are not made to be eaten.",
    icon: "🫧",
  },
  {
    number: "03",
    title: "Keep things separate",
    text: "Use clean hands, boards, and utensils to help prevent cross-contamination in your kitchen.",
    icon: "🥬",
  },
];

const surveyResults = [
  { label: "Wash produce before eating", value: 78, color: "green" },
  { label: "Look for signs of freshness", value: 64, color: "gold" },
  { label: "Know how produce was grown", value: 42, color: "sage" },
];

const preparationChecklist = [
  { id: "hands", label: "Wash hands with soap and water before preparing food." },
  { id: "rinse", label: "Rinse fruits and vegetables under clean running water." },
  { id: "surfaces", label: "Use clean knives, utensils, and cutting boards." },
  { id: "separate", label: "Keep produce separate from raw meat, poultry, and seafood." },
  { id: "chill", label: "Refrigerate cut or peeled produce promptly." },
];

const safetyMyths = [
  {
    id: "soap",
    myth: "Soap or detergent is the best way to wash produce.",
    fact: "Wash produce under clean running water instead. Soap and household cleaners can leave residues that are not meant to be eaten.",
  },
  {
    id: "peeling",
    myth: "If I plan to peel it, I do not need to wash it first.",
    fact: "Rinse produce before peeling or cutting so dirt on the surface is less likely to transfer to the edible part.",
  },
  {
    id: "organic",
    myth: "Organic produce does not need washing.",
    fact: "Wash all fresh produce under clean running water, whether it is organic or conventionally grown.",
  },
  {
    id: "residues",
    myth: "Washing removes every pesticide residue.",
    fact: "Rinsing and rubbing can remove dirt and some residues, but washing does not remove all pesticide residues.",
  },
];

const produceGuides = [
  {
    name: "Apple",
    icon: "🍎",
    category: "Fruit",
    wash: "Rinse under clean running water and rub the whole surface with your hands.",
    preparation: "Remove the stem and any bruised spots with a clean knife.",
    peeling: "Peeling is optional. The skin is edible; peel it if you prefer.",
    storage: "Keep apples refrigerated to help them stay fresh longer.",
  },
  {
    name: "Banana",
    icon: "🍌",
    category: "Fruit",
    wash: "Rinse the unpeeled banana under clean running water before cutting or peeling it.",
    preparation: "Use clean hands and a clean knife, especially if slicing it.",
    peeling: "Peeling is useful for eating; the peel is generally not eaten.",
    storage: "Store at room temperature until ripe. Refrigerate ripe bananas to slow further ripening; the peel may darken.",
  },
  {
    name: "Grapes",
    icon: "🍇",
    category: "Fruit",
    wash: "Rinse grapes under clean running water just before eating.",
    preparation: "Remove damaged grapes and drain or pat the rest dry with a clean towel.",
    peeling: "Peeling is optional and usually unnecessary.",
    storage: "Refrigerate unwashed grapes in a ventilated container and wash them before serving.",
  },
  {
    name: "Mango",
    icon: "🥭",
    category: "Fruit",
    wash: "Rinse and gently rub the whole mango under clean running water before cutting.",
    preparation: "Use a clean knife and cutting board. Cut around the large pit.",
    peeling: "Peeling is useful because the skin is usually not eaten.",
    storage: "Ripen at room temperature, then refrigerate when ripe. Keep cut mango covered in the refrigerator.",
  },
  {
    name: "Guava",
    icon: "🍐",
    category: "Fruit",
    wash: "Rub the whole guava under clean running water, including around the stem end.",
    preparation: "Trim the ends and cut with a clean knife; remove any damaged areas.",
    peeling: "Peeling is optional; the thin skin and small seeds are commonly eaten.",
    storage: "Ripen at room temperature, then refrigerate ripe guavas and refrigerate cut pieces promptly.",
  },
  {
    name: "Papaya",
    icon: "🍈",
    category: "Fruit",
    wash: "Rinse and rub the outside under clean running water before cutting through the skin.",
    preparation: "Cut with a clean knife, scoop out the seeds, and keep the flesh away from the unwashed rind.",
    peeling: "Peeling is useful because the skin is not usually eaten.",
    storage: "Ripen at room temperature; refrigerate ripe or cut papaya in a covered container.",
  },
  {
    name: "Pomegranate",
    icon: "🍎",
    category: "Fruit",
    wash: "Rinse and rub the whole fruit under clean running water before opening it.",
    preparation: "Cut through the rind with a clean knife and remove the arils using clean hands.",
    peeling: "The thick rind is removed; only the arils are usually eaten.",
    storage: "Keep whole fruit in a cool place or refrigerate it. Refrigerate removed arils in a covered container.",
  },
  {
    name: "Chikoo",
    icon: "🥔",
    category: "Fruit",
    wash: "Rinse the whole chikoo under clean running water and gently rub its skin.",
    preparation: "Cut with a clean knife and remove the large seeds before eating.",
    peeling: "Peeling is optional; many people remove the thin skin for texture.",
    storage: "Let firm fruit ripen at room temperature, then refrigerate ripe fruit and eat it soon.",
  },
  {
    name: "Orange",
    icon: "🍊",
    category: "Fruit",
    wash: "Wash and rub the orange under clean running water before peeling or cutting.",
    preparation: "Use clean hands to peel it, or use a clean knife to slice it.",
    peeling: "Peeling is useful because the rind is usually not eaten.",
    storage: "Store at room temperature for a few days or refrigerate to keep it longer; refrigerate cut pieces.",
  },
  {
    name: "Sweet Lime (Mosambi)",
    icon: "🍊",
    category: "Fruit",
    wash: "Rinse and rub the whole mosambi under clean running water before cutting or squeezing.",
    preparation: "Cut on a clean board and use clean hands or a clean juicer.",
    peeling: "Peeling is useful for eating the segments; the rind is not usually eaten.",
    storage: "Keep whole fruit in a cool place or refrigerate it. Refrigerate freshly cut fruit or juice promptly.",
  },
  {
    name: "Lemon",
    icon: "🍋",
    category: "Fruit",
    wash: "Rinse and rub the lemon under clean running water, especially before zesting.",
    preparation: "Cut or zest it with clean utensils; remove any seeds from juice if desired.",
    peeling: "Peeling is not usually needed; the rind can be used as zest after washing.",
    storage: "Refrigerate whole lemons for longer storage and refrigerate cut lemons in a covered container.",
  },
  {
    name: "Watermelon",
    icon: "🍉",
    category: "Fruit",
    wash: "Scrub the firm rind under clean running water before cutting so the knife does not carry dirt inside.",
    preparation: "Use a clean knife and board; refrigerate cut slices promptly.",
    peeling: "Remove the rind before eating; peeling before washing is not recommended.",
    storage: "Keep whole melon in a cool place. Refrigerate cut watermelon in a covered container.",
  },
  {
    name: "Muskmelon",
    icon: "🍈",
    category: "Fruit",
    wash: "Scrub the netted rind under clean running water before slicing.",
    preparation: "Cut with a clean knife, discard the seeds, and avoid placing cut flesh on the unwashed rind.",
    peeling: "Remove the rind; it is not normally eaten.",
    storage: "Ripen at room temperature, then refrigerate ripe melon. Cover and refrigerate cut pieces promptly.",
  },
  {
    name: "Pineapple",
    icon: "🍍",
    category: "Fruit",
    wash: "Rinse the outside under clean running water before removing the crown and cutting.",
    preparation: "Use a stable clean board and knife to remove the tough skin and core.",
    peeling: "Peeling is useful because the rough skin and crown are not eaten.",
    storage: "Keep whole ripe pineapple refrigerated if not using soon; refrigerate cut pieces in a covered container.",
  },
  {
    name: "Pear",
    icon: "🍐",
    category: "Fruit",
    wash: "Rub the entire pear under clean running water before eating or slicing.",
    preparation: "Remove the stem and any bruised parts with a clean knife.",
    peeling: "Peeling is optional; the skin is edible when washed.",
    storage: "Ripen at room temperature, then refrigerate ripe pears. Refrigerate cut fruit promptly.",
  },
  {
    name: "Peach",
    icon: "🍑",
    category: "Fruit",
    wash: "Gently rub the fuzzy skin under clean running water before cutting or eating.",
    preparation: "Cut with a clean knife around the pit and remove any bruised areas.",
    peeling: "Peeling is optional; the skin is edible after washing.",
    storage: "Ripen at room temperature, then refrigerate ripe peaches and refrigerate cut fruit promptly.",
  },
  {
    name: "Plum",
    icon: "🟣",
    category: "Fruit",
    wash: "Rinse and rub the whole plum under clean running water just before eating.",
    preparation: "Use a clean knife to cut around and remove the stone.",
    peeling: "Peeling is optional; the skin is usually eaten.",
    storage: "Ripen at room temperature, then refrigerate ripe plums. Keep cut fruit covered in the refrigerator.",
  },
  {
    name: "Strawberry",
    icon: "🍓",
    category: "Fruit",
    wash: "Rinse berries gently under clean running water just before eating; do not soak them.",
    preparation: "Discard mouldy or damaged berries, pat dry with a clean towel, then remove the leafy tops.",
    peeling: "Peeling is not needed; the small seeds and skin are eaten.",
    storage: "Refrigerate unwashed berries in a clean, ventilated container and wash just before serving.",
  },
  {
    name: "Litchi",
    icon: "🍒",
    category: "Fruit",
    wash: "Rinse the whole litchi under clean running water before removing its peel.",
    preparation: "Peel with clean hands and remove the seed; do not eat the seed.",
    peeling: "Peeling is required because the rough outer skin is not eaten.",
    storage: "Refrigerate fresh litchis in a ventilated container and refrigerate peeled fruit promptly.",
  },
  {
    name: "Coconut",
    icon: "🥥",
    category: "Fruit",
    wash: "Rinse and scrub the outside of the coconut under clean running water before opening it.",
    preparation: "Open it with clean tools on a stable surface; refrigerate the flesh or water after opening.",
    peeling: "Remove the hard shell and, if preferred, the thin brown skin from the flesh.",
    storage: "Store unopened coconut in a cool, dry place. Refrigerate fresh coconut flesh and use it promptly.",
  },
  {
    name: "Jackfruit",
    icon: "🍈",
    category: "Fruit",
    wash: "Rinse and scrub the outside of the whole jackfruit under clean running water before cutting.",
    preparation: "Use a clean knife and board; separate the edible bulbs and remove their seeds if desired.",
    peeling: "Remove the thick, spiky rind; the bulbs are eaten.",
    storage: "Refrigerate cut bulbs in a covered container. Keep uncut fruit in a cool, dry place.",
  },
  {
    name: "Custard Apple",
    icon: "🍈",
    category: "Fruit",
    wash: "Rinse the whole fruit under clean running water before opening it.",
    preparation: "Break or cut it open with clean hands or a clean knife and remove the seeds.",
    peeling: "Remove the outer skin; do not eat the seeds.",
    storage: "Ripen at room temperature. Refrigerate ripe fruit and refrigerate the pulp after opening.",
  },
  {
    name: "Amla",
    icon: "🟢",
    category: "Fruit",
    wash: "Rinse each amla under clean running water and rub gently.",
    preparation: "Slice with a clean knife and remove the hard central seed.",
    peeling: "Peeling is unnecessary; the edible flesh is around the seed.",
    storage: "Refrigerate fresh amla in a clean container. Keep cut pieces covered and chilled.",
  },
  {
    name: "Jamun",
    icon: "🫐",
    category: "Fruit",
    wash: "Rinse jamun gently under clean running water just before eating.",
    preparation: "Remove damaged fruit and use clean hands; remove the seed while eating.",
    peeling: "Peeling is not needed; the skin is eaten.",
    storage: "Refrigerate fresh jamun in a clean container and wash just before serving.",
  },
  {
    name: "Dragon Fruit",
    icon: "🐉",
    category: "Fruit",
    wash: "Rinse and rub the whole fruit under clean running water before cutting.",
    preparation: "Cut with a clean knife and scoop out the flesh with a clean spoon.",
    peeling: "Remove the leathery skin; the flesh and its small seeds are eaten.",
    storage: "Keep whole fruit cool or refrigerated. Cover and refrigerate cut fruit.",
  },
  {
    name: "Kiwi",
    icon: "🥝",
    category: "Fruit",
    wash: "Rub the fuzzy skin under clean running water before slicing or peeling.",
    preparation: "Slice with a clean knife or scoop out the flesh with a clean spoon.",
    peeling: "Peeling is optional; the washed skin is edible if you like its texture.",
    storage: "Ripen firm kiwi at room temperature, then refrigerate ripe fruit. Chill cut pieces promptly.",
  },
  {
    name: "Dates",
    icon: "🌴",
    category: "Fruit",
    wash: "Rinse fresh dates under clean running water and pat dry with a clean towel.",
    preparation: "Check for and remove the pit with clean hands or a clean knife.",
    peeling: "Peeling is not needed; the skin is eaten.",
    storage: "Follow the package directions for dried dates; refrigerate fresh dates and opened packs if advised.",
  },
  {
    name: "Fig (Anjeer)",
    icon: "🟣",
    category: "Fruit",
    wash: "Rinse fresh figs gently under clean running water just before eating.",
    preparation: "Remove the stem and discard fruit that is mouldy or damaged.",
    peeling: "Peeling is optional; the skin and seeds are edible.",
    storage: "Refrigerate fresh figs in a shallow container and eat them soon; refrigerate cut figs promptly.",
  },
  {
    name: "Avocado",
    icon: "🥑",
    category: "Fruit",
    wash: "Rinse and rub the outside under clean running water before cutting through the skin.",
    preparation: "Cut with a clean knife, remove the large pit safely, and scoop out the flesh.",
    peeling: "Remove the skin and pit; the flesh is eaten.",
    storage: "Ripen at room temperature. Refrigerate ripe fruit and cover cut flesh before refrigerating.",
  },
  {
    name: "Wood Apple",
    icon: "🟤",
    category: "Fruit",
    wash: "Rinse the hard shell under clean running water before opening it.",
    preparation: "Crack the shell with a clean tool and scoop out the pulp with a clean spoon.",
    peeling: "The hard shell is removed; eat the pulp and avoid any hard seeds if present.",
    storage: "Keep whole fruit in a cool, dry place. Refrigerate pulp in a covered container.",
  },
  {
    name: "Ber (Indian Jujube)",
    icon: "🟢",
    category: "Fruit",
    wash: "Rub each ber under clean running water before eating.",
    preparation: "Remove damaged spots and use clean hands; avoid the hard seed.",
    peeling: "Peeling is optional; the thin skin is usually eaten.",
    storage: "Refrigerate ripe ber in a clean container and wash just before serving.",
  },
  {
    name: "Star Fruit",
    icon: "⭐",
    category: "Fruit",
    wash: "Rinse and rub all ridges under clean running water before slicing.",
    preparation: "Trim the ends with a clean knife and slice crosswise; remove seeds if desired.",
    peeling: "Peeling is not usually needed; the washed skin is edible.",
    storage: "Refrigerate ripe star fruit and keep cut slices covered and chilled.",
  },
  {
    name: "Tomato",
    icon: "🍅",
    category: "Vegetable",
    wash: "Rinse under clean running water and gently rub the surface before slicing.",
    preparation: "Remove the stem with a clean knife and use a clean cutting board.",
    peeling: "Peeling is optional; the skin is edible.",
    storage: "Store whole ripe tomatoes at room temperature for best flavor, away from direct sunlight. Refrigerate cut tomatoes.",
  },
  {
    name: "Spinach",
    icon: "🥬",
    category: "Vegetable",
    wash: "Rinse leaves thoroughly under clean running water, separating them so water reaches all surfaces.",
    preparation: "Remove wilted leaves and dry with a clean towel or salad spinner.",
    peeling: "Peeling does not apply; eat the leaves whole or chopped.",
    storage: "Refrigerate dry leaves in a clean container or bag. Wash just before use.",
  },
  {
    name: "Cabbage",
    icon: "🥬",
    category: "Vegetable",
    wash: "Rinse the outside under clean running water. Remove outer leaves, then rinse again before cutting.",
    preparation: "Use a clean knife and board to cut or shred it.",
    peeling: "Peeling does not apply. Removing outer leaves is useful if they are damaged or dirty.",
    storage: "Refrigerate whole cabbage. Keep cut cabbage covered in the refrigerator.",
  },
  {
    name: "Carrot",
    icon: "🥕",
    category: "Vegetable",
    wash: "Scrub the carrot under clean running water, especially if it is visibly dirty.",
    preparation: "Trim the ends with a clean knife. Scrub with a clean produce brush if needed.",
    peeling: "Peeling is optional; scrubbing well is usually enough.",
    storage: "Refrigerate in a clean bag or container. Keep away from excess moisture.",
  },
  {
    name: "Potato",
    icon: "🥔",
    category: "Vegetable",
    wash: "Scrub the skin under clean running water with a clean produce brush before peeling or cutting.",
    preparation: "Trim away damaged areas and remove sprouts; discard potatoes that are green or badly spoiled.",
    peeling: "Peeling is optional after thorough scrubbing; remove green or damaged areas generously.",
    storage: "Keep unwashed potatoes in a cool, dark, ventilated place, separate from onions.",
  },
  {
    name: "Onion",
    icon: "🧅",
    category: "Vegetable",
    wash: "Rinse the outside under clean running water before cutting through the layers.",
    preparation: "Remove the dry outer layers with clean hands and cut on a clean board.",
    peeling: "Remove the papery outer skin; the inner layers are eaten.",
    storage: "Store whole onions in a cool, dry, ventilated place. Refrigerate peeled or cut onion in a covered container.",
  },
  {
    name: "Garlic",
    icon: "🧄",
    category: "Vegetable",
    wash: "Rinse the whole bulb under clean running water before separating the cloves.",
    preparation: "Peel cloves with clean hands and use a clean knife or press.",
    peeling: "Remove the papery skin from each clove before eating or cooking.",
    storage: "Keep whole bulbs in a cool, dry, ventilated place; refrigerate peeled cloves in a covered container.",
  },
  {
    name: "Ginger",
    icon: "🫚",
    category: "Vegetable",
    wash: "Scrub the root under clean running water, including creases and knobs.",
    preparation: "Trim dry ends and slice or grate with clean utensils.",
    peeling: "Peeling is optional after scrubbing; remove any dry or damaged skin.",
    storage: "Refrigerate dry ginger in a clean bag or container, or freeze it for longer keeping.",
  },
  {
    name: "Green Chilli",
    icon: "🌶️",
    category: "Vegetable",
    wash: "Rinse chillies under clean running water and rub them gently.",
    preparation: "Use clean hands and a clean knife; avoid touching your eyes after handling hot chillies.",
    peeling: "Peeling is not needed; the skin is eaten.",
    storage: "Refrigerate dry chillies in a clean container and discard any that become mouldy or soft.",
  },
  {
    name: "Capsicum",
    icon: "🫑",
    category: "Vegetable",
    wash: "Rinse the whole capsicum under clean running water and rub around the stem and base.",
    preparation: "Cut with a clean knife, then remove the stem, seeds, and inner ribs if desired.",
    peeling: "Peeling is optional and usually unnecessary; the skin is edible.",
    storage: "Refrigerate whole capsicum in a clean bag. Refrigerate cut pieces in a covered container.",
  },
  {
    name: "Cauliflower",
    icon: "🥦",
    category: "Vegetable",
    wash: "Remove outer leaves, separate florets, and rinse them under clean running water.",
    preparation: "Trim the stalk and cut florets on a clean board; discard damaged parts.",
    peeling: "Peeling does not apply; remove only tough or damaged outer leaves and stalk portions.",
    storage: "Refrigerate unwashed cauliflower in a ventilated bag and wash florets before use.",
  },
  {
    name: "Broccoli",
    icon: "🥦",
    category: "Vegetable",
    wash: "Separate florets and rinse thoroughly under clean running water.",
    preparation: "Trim the dry end of the stalk and cut florets with a clean knife.",
    peeling: "Peeling does not apply; the tender stalk is edible after trimming any tough outer layer.",
    storage: "Refrigerate dry broccoli in a ventilated bag and wash just before preparing.",
  },
  {
    name: "Brinjal (Eggplant)",
    icon: "🍆",
    category: "Vegetable",
    wash: "Rinse the whole brinjal under clean running water and rub the skin gently.",
    preparation: "Remove the stem with a clean knife and cut on a clean board just before cooking.",
    peeling: "Peeling is optional; the skin is edible when washed.",
    storage: "Refrigerate whole brinjal and use it soon. Refrigerate cooked or cut pieces promptly.",
  },
  {
    name: "Okra (Bhindi)",
    icon: "🌿",
    category: "Vegetable",
    wash: "Rinse okra under clean running water and gently rub the ridged surface.",
    preparation: "Pat it dry with a clean towel before trimming and slicing with a clean knife.",
    peeling: "Peeling is not needed; the pods are eaten whole or sliced.",
    storage: "Refrigerate unwashed, dry okra in a paper-lined bag and wash just before cooking.",
  },
  {
    name: "Cucumber",
    icon: "🥒",
    category: "Vegetable",
    wash: "Scrub the whole cucumber under clean running water, especially if the skin is ridged.",
    preparation: "Trim the ends and slice with a clean knife on a clean board.",
    peeling: "Peeling is optional after washing; the skin is edible.",
    storage: "Refrigerate whole cucumbers and keep cut slices covered in the refrigerator.",
  },
  {
    name: "Bitter Gourd (Karela)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse the ridged gourd under clean running water and rub along its grooves.",
    preparation: "Trim both ends and slice on a clean board; remove seeds if preferred.",
    peeling: "Peeling is optional; the outer skin is commonly eaten.",
    storage: "Refrigerate whole bitter gourds in a clean bag and wash before cutting.",
  },
  {
    name: "Bottle Gourd (Lauki)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse the whole gourd under clean running water before trimming or peeling.",
    preparation: "Cut with a clean knife and check a small raw piece for unusual bitterness; discard it if bitter.",
    peeling: "Peeling is usually useful because the skin can be tough; remove it with a clean peeler.",
    storage: "Keep whole bottle gourd in a cool place or refrigerate it. Refrigerate cut pieces promptly.",
  },
  {
    name: "Ridge Gourd (Turai)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse and rub along the ridges under clean running water before cutting.",
    preparation: "Trim the ends and slice with a clean knife; discard any damaged parts.",
    peeling: "Peel the raised ridges or the whole gourd if the skin is mature and tough.",
    storage: "Refrigerate whole ridge gourd in a clean bag and wash just before use.",
  },
  {
    name: "Snake Gourd",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse the full length under clean running water, rubbing the surface gently.",
    preparation: "Trim the ends, split lengthwise, and remove mature seeds if they are tough.",
    peeling: "Peeling is optional for tender gourds; remove any tough skin.",
    storage: "Refrigerate whole snake gourd and keep cut portions covered in the refrigerator.",
  },
  {
    name: "Ash Gourd (Winter Melon)",
    icon: "🍈",
    category: "Vegetable",
    wash: "Rinse and scrub the hard outer surface under clean running water before cutting.",
    preparation: "Use a stable clean board and knife; remove the seeds and fibrous centre.",
    peeling: "Peel the thick skin before eating or cooking the flesh.",
    storage: "Store whole gourd in a cool, dry place. Refrigerate cut pieces in a covered container.",
  },
  {
    name: "Pumpkin",
    icon: "🎃",
    category: "Vegetable",
    wash: "Scrub the outer skin under clean running water before cutting into the pumpkin.",
    preparation: "Use a clean, sturdy knife; remove seeds and stringy pulp with a clean spoon.",
    peeling: "Peeling depends on the variety and recipe; remove skin if it is tough.",
    storage: "Keep whole pumpkin in a cool, dry place. Refrigerate cut pumpkin and use it promptly.",
  },
  {
    name: "Drumstick (Moringa Pods)",
    icon: "🌿",
    category: "Vegetable",
    wash: "Rinse the pods under clean running water and rub along their length.",
    preparation: "Trim the ends and cut into sections with a clean knife; cook until tender.",
    peeling: "Peeling is not usually needed; the fibrous pod is often cooked and the pulp eaten.",
    storage: "Refrigerate fresh pods in a clean bag and wash just before cooking.",
  },
  {
    name: "Moringa Leaves",
    icon: "🌿",
    category: "Vegetable",
    wash: "Separate leaves from stems and rinse thoroughly under clean running water.",
    preparation: "Remove tough stems, drain well, and cook or prepare with clean utensils.",
    peeling: "Peeling does not apply; use the leaves and tender stems.",
    storage: "Refrigerate dry leaves in a clean, breathable container and use soon.",
  },
  {
    name: "Cluster Beans (Gawar)",
    icon: "🌿",
    category: "Vegetable",
    wash: "Rinse the beans under clean running water and rub away any visible dirt.",
    preparation: "Trim both ends and slice with a clean knife on a clean board.",
    peeling: "Peeling is not needed; discard any unusually tough strings while trimming.",
    storage: "Refrigerate unwashed cluster beans in a clean bag and wash before cooking.",
  },
  {
    name: "French Beans",
    icon: "🫛",
    category: "Vegetable",
    wash: "Rinse beans under clean running water and drain them well.",
    preparation: "Trim the tips and remove strings if present; cut with clean utensils.",
    peeling: "Peeling is not needed; the whole pod is eaten after cooking.",
    storage: "Refrigerate dry, unwashed beans in a clean bag and wash just before use.",
  },
  {
    name: "Green Peas",
    icon: "🫛",
    category: "Vegetable",
    wash: "Rinse fresh peas under clean running water after shelling.",
    preparation: "Shell with clean hands and discard damaged peas; cook fresh peas as desired.",
    peeling: "Peeling does not apply to shelled peas; remove the outer pod before eating the peas.",
    storage: "Refrigerate fresh peas in a covered container and use soon; keep frozen peas frozen until use.",
  },
  {
    name: "Sweet Corn",
    icon: "🌽",
    category: "Vegetable",
    wash: "Rinse the whole cob under clean running water after removing the husk and silk.",
    preparation: "Remove remaining silk with clean hands and cook on a clean surface.",
    peeling: "Remove the husk and silk; the kernels are eaten.",
    storage: "Refrigerate fresh corn in its husk and use soon. Refrigerate cooked kernels promptly.",
  },
  {
    name: "Radish (Mooli)",
    icon: "🥕",
    category: "Vegetable",
    wash: "Scrub the root under clean running water, paying attention to the root end.",
    preparation: "Trim the leaves and root tip; slice with a clean knife.",
    peeling: "Peeling is optional after thorough scrubbing; remove any woody or damaged skin.",
    storage: "Remove leafy tops and refrigerate the roots in a clean bag; store leaves separately.",
  },
  {
    name: "Beetroot",
    icon: "🟣",
    category: "Vegetable",
    wash: "Scrub the whole beet under clean running water before peeling or cutting.",
    preparation: "Trim the leaves and root end with a clean knife; cook or grate on a clean board.",
    peeling: "Peeling is optional after scrubbing; many people peel cooked beets for texture.",
    storage: "Refrigerate unwashed roots in a clean bag and keep beet greens separate.",
  },
  {
    name: "Turnip (Shalgam)",
    icon: "🟣",
    category: "Vegetable",
    wash: "Scrub the turnip under clean running water, especially around the stem end.",
    preparation: "Trim the top and root tip, then cut with a clean knife.",
    peeling: "Peeling is optional for small tender turnips; remove thicker skin on mature ones.",
    storage: "Remove greens and refrigerate the roots in a clean bag; store greens separately.",
  },
  {
    name: "Sweet Potato",
    icon: "🍠",
    category: "Vegetable",
    wash: "Scrub the skin under clean running water before baking, boiling, or cutting.",
    preparation: "Trim damaged spots and cut with a clean knife on a stable board.",
    peeling: "Peeling is optional after scrubbing; the skin can be cooked and eaten.",
    storage: "Keep unwashed sweet potatoes in a cool, dry, ventilated place rather than the refrigerator.",
  },
  {
    name: "Yam",
    icon: "🍠",
    category: "Vegetable",
    wash: "Rinse and scrub the rough skin under clean running water before cutting.",
    preparation: "Peel with a clean knife or peeler and cook thoroughly; avoid eating it raw.",
    peeling: "Peeling is useful because the outer skin is tough and is not eaten.",
    storage: "Store uncut yam in a cool, dry, ventilated place. Refrigerate peeled or cut pieces promptly.",
  },
  {
    name: "Taro (Arbi)",
    icon: "🥔",
    category: "Vegetable",
    wash: "Rinse the corms under clean running water and scrub off soil before peeling.",
    preparation: "Peel with clean hands and utensils, then cook thoroughly before eating.",
    peeling: "Peeling is needed; the skin is not eaten.",
    storage: "Keep uncut taro in a cool, dry place. Refrigerate peeled or cut pieces and use soon.",
  },
  {
    name: "Fenugreek Leaves (Methi)",
    icon: "🌿",
    category: "Vegetable",
    wash: "Separate leaves and rinse several times under clean running water to remove grit.",
    preparation: "Remove tough stems, drain well, and chop with a clean knife.",
    peeling: "Peeling does not apply; use the cleaned leaves and tender stems.",
    storage: "Refrigerate dry leaves in a clean breathable bag and use soon after purchase.",
  },
  {
    name: "Coriander Leaves",
    icon: "🌿",
    category: "Vegetable",
    wash: "Rinse leaves and stems thoroughly under clean running water, separating the bunch to release grit.",
    preparation: "Remove damaged leaves, drain, and chop with a clean knife just before use.",
    peeling: "Peeling does not apply; tender stems are also usable.",
    storage: "Refrigerate dry coriander in a clean container or wrapped towel and use while fresh.",
  },
  {
    name: "Curry Leaves",
    icon: "🌿",
    category: "Vegetable",
    wash: "Remove leaves from the sprig and rinse them under clean running water.",
    preparation: "Pick out damaged leaves, pat dry with a clean towel, and use clean utensils.",
    peeling: "Peeling does not apply; leaves are used whole or chopped.",
    storage: "Refrigerate dry leaves in a covered container or freeze them for longer storage.",
  },
  {
    name: "Mint Leaves",
    icon: "🌿",
    category: "Vegetable",
    wash: "Separate mint leaves and rinse them gently under clean running water.",
    preparation: "Remove wilted leaves, drain well, and chop with a clean knife if needed.",
    peeling: "Peeling does not apply; use the leaves and tender stems.",
    storage: "Refrigerate dry mint in a clean container and wash just before using.",
  },
  {
    name: "Lettuce",
    icon: "🥬",
    category: "Vegetable",
    wash: "Separate the leaves and rinse each under clean running water.",
    preparation: "Remove wilted outer leaves and dry with a clean towel or salad spinner.",
    peeling: "Peeling does not apply; eat the leaves whole or torn.",
    storage: "Refrigerate dry leaves in a clean container. Wash just before serving.",
  },
  {
    name: "Spring Onion",
    icon: "🌱",
    category: "Vegetable",
    wash: "Rinse the stalks under clean running water, separating the layers near the bulb.",
    preparation: "Trim roots and damaged tips, then slice with a clean knife.",
    peeling: "Peeling is not needed; remove any dry outer layer if present.",
    storage: "Refrigerate unwashed stalks in a clean bag and rinse just before use.",
  },
  {
    name: "Raw Banana",
    icon: "🍌",
    category: "Vegetable",
    wash: "Rinse the unpeeled banana under clean running water before cutting or peeling.",
    preparation: "Trim the ends and use a clean knife; cook the pieces thoroughly.",
    peeling: "Peeling is useful because the skin is usually removed before cooking.",
    storage: "Keep whole raw bananas in a cool, dry place. Refrigerate peeled or cut pieces promptly.",
  },
  {
    name: "Ivy Gourd (Tindora)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse each gourd under clean running water and rub the surface gently.",
    preparation: "Trim both ends and slice with a clean knife; discard damaged fruit.",
    peeling: "Peeling is not usually needed; the tender skin is eaten.",
    storage: "Refrigerate dry ivy gourds in a clean bag and wash before cutting.",
  },
  {
    name: "Pointed Gourd (Parwal)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rinse and rub the whole gourd under clean running water before trimming.",
    preparation: "Trim the ends and cut with a clean knife; remove mature seeds if they are tough.",
    peeling: "Scrape or peel only if the skin is tough; tender skin is often cooked.",
    storage: "Refrigerate whole pointed gourds in a clean bag and wash just before cooking.",
  },
  {
    name: "Broad Beans (Sem)",
    icon: "🫛",
    category: "Vegetable",
    wash: "Rinse the pods under clean running water and drain them.",
    preparation: "Trim the ends, remove strings if present, and shell mature beans with clean hands.",
    peeling: "Peel or remove the outer pod for mature beans; tender pods may be cooked whole after trimming.",
    storage: "Refrigerate fresh pods in a clean bag and wash just before preparing.",
  },
  {
    name: "Chayote (Chow Chow)",
    icon: "🥒",
    category: "Vegetable",
    wash: "Rub the whole chayote under clean running water before cutting.",
    preparation: "Cut with a clean knife and remove the central seed if desired.",
    peeling: "Peeling is optional for tender chayote; remove the skin if it is tough.",
    storage: "Refrigerate whole chayote in a clean bag. Keep cut pieces covered and chilled.",
  },
  {
    name: "Kohlrabi (Knol Khol)",
    icon: "🥬",
    category: "Vegetable",
    wash: "Rinse and scrub the bulb under clean running water before trimming.",
    preparation: "Remove stems and trim the root end; slice the bulb with a clean knife.",
    peeling: "Peel the fibrous outer layer; the tender inner bulb can be eaten.",
    storage: "Remove leaves and refrigerate the bulb in a clean bag; store usable leaves separately.",
  },
  {
    name: "Amaranth Greens",
    icon: "🌿",
    category: "Vegetable",
    wash: "Separate leaves and rinse thoroughly under clean running water to remove soil.",
    preparation: "Remove tough stems, drain well, and cook or chop using clean utensils.",
    peeling: "Peeling does not apply; use the leaves and tender stems.",
    storage: "Refrigerate dry greens in a clean breathable bag and use them soon.",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [produceSearch, setProduceSearch] = useState("");
  const [produceCategory, setProduceCategory] = useState("All");
  const [checkedPreparationItems, setCheckedPreparationItems] = useState([]);
  const [expandedMyth, setExpandedMyth] = useState(null);
  const searchTerm = produceSearch.trim().toLowerCase();
  const filteredProduce = produceGuides.filter((produce) => {
    const matchesSearch = produce.name.toLowerCase().includes(searchTerm);
    const matchesCategory = produceCategory === "All" || produce.category === produceCategory;
    return matchesSearch && matchesCategory;
  });
  const checklistProgress = Math.round(
    (checkedPreparationItems.length / preparationChecklist.length) * 100,
  );

  function togglePreparationItem(itemId) {
    setCheckedPreparationItems((currentItems) =>
      currentItems.includes(itemId)
        ? currentItems.filter((id) => id !== itemId)
        : [...currentItems, itemId],
    );
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="FreshSafe home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>fresh<span className="brand-light">safe</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#guide">Food Safety Guide</a>
          <a href="#consume-safely">How to Consume Safely</a>
          <a href="#farmers">Farmer Corner</a>
          <a href="#survey">Survey Results</a>
        </nav>
        <a className="nav-cta" href="#guide">Explore the guide <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="hero-label"><span className="status-dot" /> A little knowledge goes a long way</span>
            <h1>Good food starts with <span>knowing better.</span></h1>
            <p className="hero-description">
              Understand how chemicals are used on fruits and vegetables, and discover simple ways to make informed choices for your health.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#guide">Explore food safety <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#about">Why FreshSafe? <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>🍎</span><span>🥕</span><span>🥦</span>
              </div>
              <span>Small steps. Fresher confidence.</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="A colorful selection of fresh fruits and vegetables">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
              alt="Colorful fresh vegetables arranged at a market"
            />
            <div className="image-sticker"><span>✿</span><strong>Fresh facts<br />for everyday life</strong></div>
            <div className="floating-label"><span>✓</span> Better informed, every day</div>
          </div>
          <div className="hero-bottom">
            <span>YOUR GUIDE TO SMARTER PRODUCE CHOICES</span>
            <a href="#guide">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="intro-leaf" aria-hidden="true">✳</div>
          <p>
            <span className="eyebrow">FRESHSAFE, MADE SIMPLE</span>
            <span className="intro-statement">Fresh food is part of a healthy life. Understanding how it’s grown and handled helps us make <em>choices with confidence.</em></span>
          </p>
          <span className="intro-aside">Curiosity is a<br />good place to start. ↗</span>
        </section>

        <section className="guide-section section-pad" id="guide">
          <SectionHeading
            eyebrow="A FRESH START"
            title="A few good habits go a long way."
            description="Practical, everyday steps for handling fresh produce with care."
            centered
          />
          <div className="tip-grid">
            {safetyTips.map((tip) => (
              <article className="tip-card" key={tip.number}>
                <div className="tip-card-top"><span className="tip-number">{tip.number}</span><span className="tip-icon">{tip.icon}</span></div>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
                <a className="card-link" href="#consume-safely">Learn more <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="source-note">Good to know: Follow local food-safety guidance for specific advice on washing and storing produce.</p>
        </section>

        <section className="consume-section section-pad" id="consume-safely">
          <SectionHeading
            eyebrow="FRESH PRODUCE, MADE SIMPLE"
            title="How to Consume Safely"
            description="Choose a fruit or vegetable for practical washing, preparation, peeling, and storage tips."
            centered
          />
          <div className="produce-controls">
            <label className="produce-search-label" htmlFor="produce-search">Search produce</label>
            <input
              id="produce-search"
              className="produce-search"
              type="search"
              placeholder="Try apple or spinach"
              value={produceSearch}
              onChange={(event) => {
                setProduceSearch(event.target.value);
                setSelectedProduce(null);
              }}
            />
            <div className="produce-filters" role="group" aria-label="Filter produce by category">
              {[
                { label: "All", value: "All" },
                { label: "Fruits", value: "Fruit" },
                { label: "Vegetables", value: "Vegetable" },
              ].map((category) => (
                <button
                  className={`filter-button${produceCategory === category.value ? " active" : ""}`}
                  type="button"
                  key={category.value}
                  onClick={() => {
                    setProduceCategory(category.value);
                    setSelectedProduce(null);
                  }}
                  aria-pressed={produceCategory === category.value}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="produce-grid" aria-label="Choose produce for safety tips">
            {filteredProduce.map((produce) => (
              <button
                className={`produce-card${selectedProduce?.name === produce.name ? " selected" : ""}`}
                type="button"
                key={produce.name}
                onClick={() => setSelectedProduce(produce)}
                aria-pressed={selectedProduce?.name === produce.name}
              >
                <span className="produce-icon" aria-hidden="true">{produce.icon}</span>
                <span className="produce-name">{produce.name}</span>
                <span className="produce-card-hint">View safety tips <span aria-hidden="true">↗</span></span>
              </button>
            ))}
          </div>
          {filteredProduce.length === 0 && (
            <p className="produce-empty" role="status">No produce matches that search. Try another name or category.</p>
          )}
          {selectedProduce && (
            <article className="produce-detail" aria-live="polite" aria-labelledby="produce-detail-title">
              <div className="produce-detail-heading">
                <span className="produce-detail-icon" aria-hidden="true">{selectedProduce.icon}</span>
                <div>
                  <span className="eyebrow">YOUR QUICK GUIDE</span>
                  <h3 id="produce-detail-title">{selectedProduce.name}</h3>
                </div>
              </div>
              <dl className="produce-detail-list">
                <div><dt>How to wash it safely</dt><dd>{selectedProduce.wash}</dd></div>
                <div><dt>Preparation tips</dt><dd>{selectedProduce.preparation}</dd></div>
                <div><dt>Peeling</dt><dd>{selectedProduce.peeling}</dd></div>
                <div><dt>Storage tips</dt><dd>{selectedProduce.storage}</dd></div>
              </dl>
              <p className="produce-detail-note">Use clean running water for produce. Do not wash fruits or vegetables with soap, detergent, or bleach.</p>
            </article>
          )}
        </section>

        <section className="preparation-section section-pad" id="preparation">
          <SectionHeading
            eyebrow="A FEW SIMPLE STEPS"
            title="Safe food preparation checklist"
            description="Check off each step as you get your produce ready."
            centered
          />
          <div className="checklist-panel">
            <div className="checklist-progress-heading">
              <span>Preparation progress</span>
              <strong>{checklistProgress}%</strong>
            </div>
            <div
              className="checklist-progress-track"
              role="progressbar"
              aria-label="Preparation checklist progress"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={checklistProgress}
            >
              <div className="checklist-progress-fill" style={{ width: `${checklistProgress}%` }} />
            </div>
            <ul className="checklist-items">
              {preparationChecklist.map((item) => (
                <li key={item.id}>
                  <label className="checklist-item">
                    <input
                      type="checkbox"
                      checked={checkedPreparationItems.includes(item.id)}
                      onChange={() => togglePreparationItem(item.id)}
                    />
                    <span>{item.label}</span>
                  </label>
                </li>
              ))}
            </ul>
            <p className="checklist-count">
              {checkedPreparationItems.length} of {preparationChecklist.length} steps complete
            </p>
          </div>
        </section>

        <section className="myths-section section-pad" id="myths">
          <SectionHeading
            eyebrow="GOOD TO KNOW"
            title="Myths vs Facts"
            description="Tap a card to reveal a simple fact about preparing fruits and vegetables safely."
            centered
          />
          <div className="myth-grid">
            {safetyMyths.map((item) => {
              const isExpanded = expandedMyth === item.id;
              return (
                <button
                  className={`myth-card${isExpanded ? " expanded" : ""}`}
                  type="button"
                  key={item.id}
                  onClick={() => setExpandedMyth(isExpanded ? null : item.id)}
                  aria-expanded={isExpanded}
                >
                  <span className="myth-label">Myth</span>
                  <span className="myth-statement">{item.myth}</span>
                  <span className="myth-reveal">{isExpanded ? "Hide fact" : "Reveal fact"} <span aria-hidden="true">{isExpanded ? "−" : "+"}</span></span>
                  {isExpanded && (
                    <span className="myth-fact">
                      <strong>Fact</strong>
                      <span>{item.fact}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <section className="farmer-section section-pad" id="farmers">
          <div className="farmer-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Green farmland stretching toward the horizon"
              loading="lazy"
            />
            <span className="image-caption">GROWING WELL, TOGETHER</span>
          </div>
          <div className="farmer-copy">
            <span className="eyebrow">THE FARMER CORNER</span>
            <h2>Growing food is a careful balance.</h2>
            <p>Farmers work to protect crops and produce healthy harvests. Learn about responsible crop care, thoughtful handling, and the people behind the food on your table.</p>
            <a className="button button-outline" href="#survey">Explore the community <span aria-hidden="true">→</span></a>
            <div className="farmer-fact"><span className="fact-mark">✳</span><span><strong>Good conversations grow good food.</strong><br />Ask questions. Share what you learn.</span></div>
          </div>
        </section>

        <section className="survey-section section-pad" id="survey">
          <div className="survey-top">
            <SectionHeading
              eyebrow="WHAT OUR COMMUNITY SAYS"
              title="Curious minds make safer choices."
              description="A snapshot of what people say they do when choosing and preparing fresh produce."
            />
            <div className="survey-badge"><span>✳</span><strong>Community<br />snapshot</strong></div>
          </div>
          <div className="survey-content">
            <div className="survey-bars">
              {surveyResults.map((item) => (
                <div className="survey-row" key={item.label}>
                  <div className="survey-label"><span>{item.label}</span><strong>{item.value}%</strong></div>
                  <div className="bar-track"><div className={`bar-fill ${item.color}`} style={{ width: `${item.value}%` }} /></div>
                </div>
              ))}
              <p className="source-note">Illustrative sample results for this student project. Replace with responses from your own survey.</p>
            </div>
            <aside className="survey-quote">
              <span className="quote-mark">“</span>
              <blockquote>Knowing a little more about my food makes me feel a lot more confident.</blockquote>
              <span className="quote-caption">A FreshSafe community member</span>
              <div className="quote-produce" aria-hidden="true">🍋 🍊 🍐</div>
            </aside>
          </div>
        </section>

        <section className="closing-banner">
          <span className="eyebrow">ONE LAST THOUGHT</span>
          <h2>Know your food.<br /><em>Feel good about it.</em></h2>
          <a className="button button-light" href="#home">Back to the top <span aria-hidden="true">↑</span></a>
          <span className="closing-flower" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">✳</span><span>fresh<span className="brand-light">safe</span></span></a>
        <span>Know Your Food. Protect Your Health.</span>
        <span className="footer-credit">A student project made with care <span aria-hidden="true">♡</span></span>
      </footer>
    </>
  );
}

export default App;
