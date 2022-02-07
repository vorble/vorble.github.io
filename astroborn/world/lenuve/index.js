import { makePickupItem, langmap } from '../index.js';
import { Scene } from '../../scene.js';
function stateItems() {
    return {
        windBandana: false,
    };
}
export function state() {
    return {
        items: stateItems(),
        bed_made: false,
    };
}
export const rooms = [];
export const items = [];
// Planet: Lenuve
// Land: The Cup
//
// An isolated people exist on the planet Lenuve. The small population is nestled within a large
// stone basin rising above the trees along all sides. They call the land "The Cup" and its the
// only land they have ever known.
//
// In the last two hundred years, more and more lights have started to appear in the sky. Sometimes
// as solitary points crossing between the rims or hurried streaks or things that leave cloudy
// tracks frozen above.
const itemWindBandana = {
    itemNo: 2000,
    name: langmap({
        enus: `Wind Bandana`,
    }),
    description: langmap({
        enus: `It's a soft linen bandana, yellowed over the years. The Cup's crest of the wind is sewn upon it.`,
    }),
    equipmentStats: {
        defense: 1,
    },
};
items.push(itemWindBandana);
rooms.push({
    roomNo: 2000,
    name: langmap({
        enus: `Row Room`,
    }),
    description: langmap({
        enus: `You are in dimly lit, permanent room built from fine, dark planks that let in only
    tendrils of light. A bed, some racks, and drawers line the walls. A thatch door is
    on the narrow wall. On the other narrow wall, a thin window lets in a ray of sunlight.`,
    }),
    things: (state) => [
        {
            name: langmap({
                enus: `Thatch Door`,
            }),
            description: langmap({
                enus: `It's woven from mature thera grass blades with hinges on one side that allow
        door to open into the room.`,
            }),
            exit: {
                useNarration: langmap({
                    enus: `You go through the door and down the hallway to enter the outdoors.`,
                }),
                toRoomNo: 2001,
            },
        },
        {
            name: langmap({
                enus: `Bed`,
            }),
            description: state.lenuve.bed_made ? langmap({
                enus: `It's purposefully tidy.`,
            }) : langmap({
                enus: `It's not quite neat with the linens pushed to one side as if the last occupant
        did not get much rest.`,
            }),
            use: {
                text: langmap({
                    enus: `Bed`,
                }),
                action: (state) => {
                    const result = state.lenuve.bed_made ? langmap({
                        enus: `The bed is already tidy.`,
                    }) : langmap({
                        enus: `You pull the linens evenly over the mattress. A bandana was in the mess.`,
                    });
                    state.lenuve.bed_made = true;
                    return result;
                },
            },
        },
        {
            name: langmap({
                enus: `Common Wall`,
            }),
            description: langmap({
                enus: `The long wall is shared with the adjoining room.`,
            }),
            use: {
                text: langmap({
                    enus: `Common Wall`,
                }),
                action: (state) => langmap({
                    enus: `Getting close to the wall to listen, you can hear a calm, muffled voice and the indistinct patter of activity.`,
                }),
            },
        },
        {
            name: langmap({
                enus: `Rack`,
            }),
            description: langmap({
                enus: `Affixed to the wall, small shelves and pegs offer a place to put clothes.`,
            }),
        },
        {
            name: langmap({
                enus: `Drawer`,
            }),
            description: langmap({
                enus: `It's a worn and marked set of wooden drawers that has been used by many over the years.`,
            }),
        },
        {
            name: langmap({
                enus: `Slit`,
            }),
            description: langmap({
                enus: `A steady beam of light illuminates a column of dust in the air, laying as a skewed line across the floor and straight up the adjacent wall.`,
            }),
            use: {
                text: langmap({
                    enus: 'Slit',
                }),
                action: (state) => langmap({
                    enus: `You peer through the slit into the outdoors. You see the back meadow and the top of the latrine some ways in the distance.`,
                }),
            },
        },
        ...(state.lenuve.bed_made ? makePickupItem(itemWindBandana, state.lenuve.items, 'windBandana') : []),
    ],
});
rooms.push({
    roomNo: 2001,
    name: langmap({
        enus: `Row Lawn`,
    }),
    description: langmap({
        enus: `There is a worn, sandy walkway through the grassy plot, running between a larger
    causeway and a series of faded row houses made of wood. The grass is short and worn from foot traffic.
    A small, traveled opening is on the tree line past the meadow.`,
    }),
    things: [
        {
            name: langmap({
                enus: `House Door`,
            }),
            description: langmap({
                enus: `It's a sturdy wooden door with hinges.`,
            }),
            exit: {
                useNarration: langmap({
                    enus: `You go through the door and go down the hallway to one of the rooms.`,
                }),
                toRoomNo: 2000,
            },
        },
        {
            name: langmap({
                enus: `Meadow`,
            }),
            description: langmap({
                enus: `A path leads to a meadow of long grass leading toward the forest.`,
            }),
            exit: {
                useNarration: langmap({
                    enus: `You go across the lawn and start to push your way through the tall grass.`,
                }),
                toRoomNo: 2002,
            },
        },
        {
            name: langmap({
                enus: `Row Houses`,
            }),
            description: langmap({
                enus: `It's a series of row houses built from dark wooden planks, but are greyed and faded from years in the sun.`,
            }),
        },
        {
            name: langmap({
                enus: `Greg and Maun`,
            }),
            isHereText: langmap({
                enus: `Greg and Maun are raucously joking in the lawn.`,
            }),
            description: langmap({
                enus: `Greg and Maun, young men, are riled up on the lawn, talking and joking with smiles on their faces.`,
            }),
            talk: {
                text: langmap({
                    enus: `Greg and Maun`,
                }),
                action: [
                    {
                        text: langmap({
                            enus: `Funny?`,
                        }),
                        action: (state) => langmap({
                            enus: new Scene([
                                `You ask about what's so funny. Greg replies with a smile,
                "Maun was telling me the gopher he saw cutting wood yesterday."`,
                                `Maun interjects, "Looking at me like this:" He tilts his head and
                exposes his front teeth, raising his left eyebrow.`,
                                `Greg and Maun continue their playful banter and make other animalistic
                motions toward each other.`
                            ]),
                        }),
                    },
                ],
            },
        },
        // TODO: Exit to common area.
        // TODO: Looking at things around.
        // TODO: Way to get behind row house. Close to the latrine.
    ],
});
rooms.push({
    roomNo: 2002,
    name: langmap({
        enus: `Meadow`,
    }),
    description: langmap({
        enus: `You are in a meadow of tall grass and wildflowers situated between the houses on the outskirts of town and a forest.
    The pathway is obvious, but not so worn down as to trample the grass completely.`,
    }),
    things: [
        {
            name: langmap({
                enus: `Houses`,
            }),
            description: langmap({
                enus: `The pathway leads toward the lawn and some houses not far off.`,
            }),
            exit: {
                useNarration: langmap({
                    enus: `You push through the tall grass toward the houses and reach the lawn.`,
                }),
                toRoomNo: 2001,
            },
        },
        {
            name: langmap({
                enus: `Grass`,
            }),
            description: langmap({
                enus: `The grass moves gently with a hiss as the waves of wind draw over it.`,
            }),
        },
    ],
});
