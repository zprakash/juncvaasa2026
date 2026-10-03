import hazardsData from "../data/hazards.json" with {
    type: "json"
};

const hazards = hazardsData.hazards;

export const getAllHazards = () => {
    return hazards;
};

export const findHazardById = (
    id
) => {
    return hazards.find(
        (hazard) => hazard.id === id
    );
};

export const getHazardListItem = (
    hazard
) => {
    return {
        id: hazard.id,
        check_question: hazard.check_question
    };
};

export const getHazardOverview = (hazard) => { return { id: hazard.id, check_question: hazard.check_question, levels: { green: { situation: hazard.levels.green.situation }, yellow: { situation: hazard.levels.yellow.situation }, red: { situation: hazard.levels.red.situation } } }; };

export const getHazardFullDetails = (
    hazard
) => {
    return hazard;
};
