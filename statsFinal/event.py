import statbotics

class Event:
    def __init__(self, eventKey):
        self.eventKey = eventKey
        self.matches = statbotics.Statbotics().get_matches(event = self.eventKey, elims = True)
        self.alliances = []

    def init_alliances(self):
        for i in range(8):
            self.alliances.append([i + 1, 0])

        self.alliances[0].extend([self.matches[0]['red_1'], self.matches[0]['red_2'], self.matches[0]['red_3']])
        self.alliances[7].extend([self.matches[0]['blue_1'], self.matches[0]['blue_2'], self.matches[0]['blue_3']])
        self.alliances[3].extend([self.matches[1]['red_1'], self.matches[1]['red_2'], self.matches[1]['red_3']])
        self.alliances[4].extend([self.matches[1]['blue_1'], self.matches[1]['blue_2'], self.matches[1]['blue_3']])
        self.alliances[2].extend([self.matches[2]['red_1'], self.matches[2]['red_2'], self.matches[2]['red_3']])
        self.alliances[5].extend([self.matches[2]['blue_1'], self.matches[2]['blue_2'], self.matches[2]['blue_3']])
        self.alliances[1].extend([self.matches[3]['red_1'], self.matches[3]['red_2'], self.matches[3]['red_3']])
        self.alliances[6].extend([self.matches[3]['blue_1'], self.matches[3]['blue_2'], self.matches[3]['blue_3']])