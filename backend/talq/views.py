from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK 
from rest_framework.permissions import AllowAny 

from .models import TalqType


@api_view(['GET'])
@permission_classes([AllowAny])
def get_talqs_type(request):
    table_id = request.GET.get('table_id')
    return Response({'talqs': TalqType.get_talqs_by_table(table_id, request)}, HTTP_200_OK)
