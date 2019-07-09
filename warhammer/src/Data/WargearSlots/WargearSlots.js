const ReturnWargearSlots = (ModelId) => {
    let WargearSlots = [];
    //Aeldari Slots
    const DireAvengersHands = {
        id: 1,
        Name: "Weapon in Hands",
        ModelId: 1
    };
    WargearSlots.push(DireAvengersHands);

    const DireAvengersGrenades = {
        id: 2,
        Name: "Grenades",
        ModelId: 1
    };
    WargearSlots.push(DireAvengersGrenades);

    const DireAvengersExarchHands = {
        id: 3,
        Name: "Weapon in Hands",
        ModelId: 2
    };
    WargearSlots.push(DireAvengersExarchHands);

    const DireAvengersExarchGrenades = {
        id: 4,
        Name: "Grenades",
        ModelId: 2
    };
    WargearSlots.push(DireAvengersExarchGrenades);

    const GuardianDefendersHands = {
        id: 5,
        Name: "Weapon in Hands",
        ModelId: 3
    };
    WargearSlots.push(GuardianDefendersHands);

    const GuardianDefendersGrenades = {
        id: 6,
        Name: "Grenades",
        ModelId: 3
    };
    WargearSlots.push(GuardianDefendersGrenades);

    const HeavyWeaponPlatform = {
        id: 7,
        Name: "Weapon",
        ModelId: 4
    };
    WargearSlots.push(HeavyWeaponPlatform);

    const StormGuardianHands = {
        id: 8,
        Name: "Weapon in Hands",
        ModelId: 5
    };
    WargearSlots.push(StormGuardianHands);

    const StormGuardianGrenades = {
        id: 9,
        Name: "Grenades",
        ModelId: 5
    };
    WargearSlots.push(StormGuardianGrenades);

    const RangersHands = {
        id: 10,
        Name: "Weapon in Hands",
        ModelId: 6
    };
    WargearSlots.push(RangersHands);

    const FireDragonHands = {
        id: 11,
        Name: "Weapon in Hands",
        ModelId: 7
    };
    WargearSlots.push(FireDragonHands);

    const FireDragonGrenades = {
        id: 12,
        Name: "Grenades",
        ModelId: 7
    };
    WargearSlots.push(FireDragonGrenades);

    const FireDragonExarchHands = {
        id: 13,
        Name: "Weapon in Hands",
        ModelId: 8
    };
    WargearSlots.push(FireDragonExarchHands);

    const FireDragonExarchGrenades = {
        id: 14,
        Name: "Grenades",
        ModelId: 8
    };
    WargearSlots.push(FireDragonExarchGrenades);

    const HowlingBansheeHands = {
        id: 15,
        Name: "Weapon in Hands",
        ModelId: 9
    };
    WargearSlots.push(HowlingBansheeHands);

    const HowlingBansheeExarchHands = {
        id: 16,
        Name: "Weapon in Hands",
        ModelId: 10
    };
    WargearSlots.push(HowlingBansheeExarchHands);

    const StrikingScorpionMainHand = {
        id: 17,
        Name: "Weapon in Hands",
        ModelId: 11
    };
    WargearSlots.push(StrikingScorpionMainHand);
    
    const StrikingScorpionGrenades = {
        id: 18,
        Name: "Grenades",
        ModelId: 11
    };
    WargearSlots.push(StrikingScorpionGrenades);

    const StrikingScorpionExarchMainHand = {
        id: 19,
        Name: "Weapon in Main Hand",
        ModelId: 12
    };
    WargearSlots.push(StrikingScorpionExarchMainHand);

    const StrikingScorpionExarchGrenades = {
        id: 20,
        Name: "Grenades",
        ModelId: 12
    };
    WargearSlots.push(StrikingScorpionExarchGrenades);

    const FarseerMainHand = {
        id: 21,
        Name: "Main Weapon",
        ModelId: 13
    };
    WargearSlots.push(FarseerMainHand);

    const FarseerOffHand = {
        id: 22,
        Name: "Off Weapon",
        ModelId: 13
    };
    WargearSlots.push(FarseerOffHand);

    const WarlockMainHands = {
        id: 23,
        Name: "Main Weapon",
        ModelId: 14
    };
    WargearSlots.push(WarlockMainHands);

    const WarlockOffHands = {
        id: 24,
        Name: "Off Weapon",
        ModelId: 14
    };
    WargearSlots.push(WarlockOffHands);

    const SpiritseerMainHands = {
        id: 25,
        Name: "Main Weapon",
        ModelId: 15
    };
    WargearSlots.push(SpiritseerMainHands);

    const SpiritseerOffHands = {
        id: 26,
        Name: "Off Weapon",
        ModelId: 15
    };
    WargearSlots.push(SpiritseerOffHands);

    const WarlockConclaveMainHands = {
        id: 27,
        Name: "Main Weapon",
        ModelId: 16
    };
    WargearSlots.push(WarlockConclaveMainHands);

    const WarlockConclaveOffHands = {
        id: 28,
        Name: "Off Weapon",
        ModelId: 16
    };
    WargearSlots.push(WarlockConclaveOffHands);

    const StrikingScorpionExarchOffHand = {
        id: 29,
        Name: "Weapon in Off hand",
        ModelId: 12
    };
    WargearSlots.push(StrikingScorpionExarchOffHand);


    //===============


    return WargearSlots.filter((slot) => slot.ModelId == ModelId);
}

export default ReturnWargearSlots;