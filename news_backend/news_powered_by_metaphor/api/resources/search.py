from flask import request
from flask_restful import Resource
from news_powered_by_metaphor.controllers.api.v1 import APIV1Controller

DEFAULT_INPUT = "Latest news"
DEFAULT_CHANNEL = ["www.cnn.com"]
DEFAULT_ADDRESS = "-1"


class QueryRetriever(Resource):
    """Query Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self):
        try:
            input_sentence = request.get_json().get("input")
            if input_sentence == "":
                raise
        except:
            input_sentence = DEFAULT_INPUT

        try:
            channel = request.get_json().get("channel")
            if channel == None or channel == "":
                raise
        except:
            channel = DEFAULT_CHANNEL

        print("==========user response:==========")
        print(input_sentence)
        print("==========user channel:==========")
        print(channel)
        controller = APIV1Controller()
        response = controller.handle_query_for_search(
            input_sentence, channel
        )
        print("==========retrieved result:==========")
        print(response)
        return response


class DashboardViewer(Resource):
    """DashboardViewer Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def get(self, dashboard_id):
        return APIV1Controller().get_dashboard(dashboard_id)


class DashboardSaver(Resource):
    """DashboardSaver Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self, dashboard_id):
        wallet_address = request.get_json().get("wallet_address")
        if wallet_address == "":
            return 400

        return APIV1Controller().save_dashboard_to_user(dashboard_id, wallet_address)


class DashboardForUser(Resource):
    """DashboardForUser Resource"""

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def get(self, wallet_address):
        return APIV1Controller().get_dashboards(wallet_address)


class DashboardFeedback(Resource):
    """DashboardFeedback Resource
    """

    # to enable security uncomment line below
    # method_decorators = [jwt_required()]

    def post(self, dashboard_id, feedback):
        return APIV1Controller().save_dashboard_feedback(dashboard_id, feedback)