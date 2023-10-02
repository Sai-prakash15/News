from news_powered_by_metaphor.services.metaphor.service import MetaphorService



class APIV1Controller:
    def handle_query_for_search(self, input_sentence, channel, *args, **kwargs):
        """Get data for query

        Parameters:
        ----------
        input_sentence : _type_
        """
        ai_service = MetaphorService()

        response = ai_service.request_search(input_sentence,[channel], *args, **kwargs)

        return response